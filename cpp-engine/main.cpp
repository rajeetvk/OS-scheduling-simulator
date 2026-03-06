#include <iostream>
#include <fstream>
#include <vector>
#include "scheduler.hpp"

using namespace std;
using json = nlohmann::json;

int main() {

    ifstream inputFile("input.json");

    if (!inputFile.is_open()) {
        cout << "Cannot open input.json\n";
        return 1;
    }

    json inputData;
    inputFile >> inputData;

    string algorithm = inputData["algorithm"];

    vector<Process> processes;

 for (auto& item : inputData["processes"]) {

    string pidStr = item["pid"];
    int pid = stoi(pidStr.substr(1));   // "P1" → 1

    int arrival = item["arrival"];
    int burst = item["burst"];

    processes.push_back(Process(pid, arrival, burst));
}
    json gantt = json::array();

    runScheduler(algorithm, processes, gantt, inputData);

    double totalTAT = 0, totalWT = 0;

    for (auto& p : processes) {
        totalTAT += p.tat;
        totalWT += p.wt;
    }

   json output;

output["ganttChart"] = gantt;
output["averageTurnAroundTime"] = totalTAT / processes.size();
output["averageWaitingTime"] = totalWT / processes.size();

json processList = json::array();

for (auto& p : processes) {

    json proc;

    proc["id"] = p.id;
    proc["arrival"] = p.at;
    proc["burst"] = p.bt;
    proc["completion"] = p.ct;
    proc["waiting"] = p.wt;
    proc["turnaround"] = p.tat;

    processList.push_back(proc);
}

output["processes"] = processList;

ofstream outFile("output.json");
outFile << output.dump(4);

    cout << "Execution completed.\n";

    return 0;
}