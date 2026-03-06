#include <iostream>
#include "scheduler.hpp"

using namespace std;

void runScheduler(
    string algorithm,
    vector<Process>& processes,
    json& gantt,
    json& inputData
) {

    if (algorithm == "fcfs") {
        runFCFS(processes, gantt);
    }

    else if (algorithm == "sjf") {
        runSJF(processes, gantt);
    }

    else if (algorithm == "srtf") {
        runSRTF(processes, gantt);
    }

    else if (algorithm == "ljf") {
        runLJF(processes, gantt);
    }

    else if (algorithm == "lrtf") {
        runLRTF(processes, gantt);
    }

    else if (algorithm == "rr") {

        int tq = 0;

        // Check if timeQuantum exists
        if (!inputData.contains("timeQuantum")) {
            cout << "Error: timeQuantum missing for Round Robin\n";
            return;
        }

        // Check if it is actually a number
        if (!inputData["timeQuantum"].is_number()) {
            cout << "Error: timeQuantum must be a number\n";
            return;
        }

        tq = inputData["timeQuantum"];

        // Validate value
        if (tq <= 0) {
            cout << "Error: timeQuantum must be greater than 0\n";
            return;
        }

        runRR(processes, gantt, tq);
    }

    else {
        cout << "Error: Unknown Algorithm -> " << algorithm << endl;
    }
}