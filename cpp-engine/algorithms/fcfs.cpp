#include <algorithm>
#include "../scheduler.hpp"

using namespace std;

void runFCFS(vector<Process>& p, json& gantt) {

    // Sort by arrival time
    sort(p.begin(), p.end(), [](Process a, Process b) {
        return a.at < b.at;
    });

    int ct = 0;

    for (int i = 0; i < p.size(); i++) {

        if (ct < p[i].at) {
            ct = p[i].at;
        }

        int startTime = ct;

        ct += p[i].bt;

        // Store completion time
        p[i].ct = ct;

        // Calculate TAT and WT
        p[i].tat = p[i].ct - p[i].at;
        p[i].wt = p[i].tat - p[i].bt;

        // Fill Gantt chart
        gantt.push_back({
            {"id", p[i].id},
            {"start", startTime},
            {"end", ct}
        });
    }
}