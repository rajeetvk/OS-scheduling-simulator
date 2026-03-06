#include <climits>
#include <algorithm>
#include "../scheduler.hpp"

using namespace std;

void runLRTF(vector<Process>& p, json& gantt) {

    int n = p.size();
    int ct = 0;
    int completed = 0;

    // Sort by arrival time
    sort(p.begin(), p.end(), [](Process a, Process b) {
        return a.at < b.at;
    });

    while (completed < n) {

        int index = -1;
        int maxi = INT_MIN;

        // Find process with longest remaining time
        for (int i = 0; i < n; i++) {
            if (p[i].at <= ct && p[i].remaining > 0 && p[i].remaining > maxi) {
                maxi = p[i].remaining;
                index = i;
            }
        }

        if (index == -1) {
            ct++;
            continue;
        }

        int startTime = ct;

        // Execute for 1 unit (preemptive)
        p[index].remaining--;
        ct++;

        // Store Gantt per unit
        gantt.push_back({
            {"id", p[index].id},
            {"start", startTime},
            {"end", ct}
        });

        if (p[index].remaining == 0) {
            p[index].ct = ct;
            completed++;
        }
    }

    // Final TAT & WT
    for (int i = 0; i < n; i++) {
        p[i].tat = p[i].ct - p[i].at;
        p[i].wt = p[i].tat - p[i].bt;
    }
}