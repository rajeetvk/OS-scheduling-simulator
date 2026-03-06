#ifndef PROCESS_HPP
#define PROCESS_HPP

using namespace std;

class Process {
public:
    int id;
    int at;
    int bt;
    int remaining;
    int tat;
    int wt;
    int ct;

    Process(int id, int at, int bt) {
        this->id = id;
        this->at = at;
        this->bt = bt;
        this->remaining = bt;
        this->tat = 0;
        this->wt = 0;
        this->ct = 0;
    }
};

#endif