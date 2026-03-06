#ifndef SCHEDULER_HPP
#define SCHEDULER_HPP

#include <vector>
#include <string>
#include "process.hpp"
#include "json.hpp"

using namespace std;
using json = nlohmann::json;

void runFCFS(vector<Process>&, json&);
void runSJF(vector<Process>&, json&);
void runSRTF(vector<Process>&, json&);
void runLJF(vector<Process>&, json&);
void runLRTF(vector<Process>&, json&);
void runRR(vector<Process>&, json&, int);

void runScheduler(
    string algorithm,
    vector<Process>& processes,
    json& gantt,
    json& inputData
);

#endif