#include <queue>
#include <algorithm>
#include "../scheduler.hpp"

using namespace std;

void runRR(vector<Process>& p, json& gantt, int tq) {

    int n = p.size();
    int ct = 0;
    int completed = 0;

    queue<int> q;
    vector<bool> inQueue(n, false);

    // Sort by arrival time
    sort(p.begin(), p.end(), [](Process a, Process b) {
        return a.at < b.at;
    });

    while (completed < n) {

        // Add newly arrived processes
        for (int i = 0; i < n; i++) {
            if (!inQueue[i] && p[i].at <= ct) {
                q.push(i);
                inQueue[i] = true;
            }
        }

        if (q.empty()) {
            ct++;
            continue;
        }

        int index = q.front();
        q.pop();

        int startTime = ct;

        if (p[index].remaining > tq) {
            p[index].remaining -= tq;
            ct += tq;
        } else {
            ct += p[index].remaining;
            p[index].remaining = 0;
            p[index].ct = ct;
            completed++;
        }

        gantt.push_back({
            {"id", p[index].id},
            {"start", startTime},
            {"end", ct}
        });

        // Add processes arrived during execution
        for (int i = 0; i < n; i++) {
            if (!inQueue[i] && p[i].at <= ct) {
                q.push(i);
                inQueue[i] = true;
            }
        }

        if (p[index].remaining > 0) {
            q.push(index);
        }
    }

    // Final TAT & WT calculation
    for (int i = 0; i < n; i++) {
        p[i].tat = p[i].ct - p[i].at;
        p[i].wt = p[i].tat - p[i].bt;
    }
}