#include <climits>
#include "../scheduler.hpp"

using namespace std;

void runSJF(vector<Process>& p, json& gantt) {

    int n = p.size();
    int ct = 0;
    int completed = 0;

    vector<bool> done(n, false);

    while (completed < n) {

        int index = -1;
        int mini = INT_MAX;

        // Find shortest job among arrived processes
        for (int i = 0; i < n; i++) {
            if (!done[i] && p[i].at <= ct && p[i].bt < mini) {
                mini = p[i].bt;
                index = i;
            }
        }

        // If no process available, increment time
        if (index == -1) {
            ct++;
            continue;
        }

        int startTime = ct;

        ct += p[index].bt;

        p[index].ct = ct;
        p[index].tat = p[index].ct - p[index].at;
        p[index].wt = p[index].tat - p[index].bt;

        done[index] = true;
        completed++;

        gantt.push_back({
            {"id", p[index].id},
            {"start", startTime},
            {"end", ct}
        });
    }
}