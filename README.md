# OS Scheduling Simulator (OSSIM)

A full-stack **CPU Scheduling Simulator** that allows users to experiment with different operating system scheduling algorithms and visualize their execution using **Gantt Charts and performance metrics**.

The simulator integrates **React (frontend), Node.js (backend), and C++ (algorithm engine)** to demonstrate how operating systems manage process scheduling.

Repository:
https://github.com/rajeetvk/OS-scheduling-simulator

---

# Features

• Interactive process input interface
• Multiple CPU scheduling algorithms
• Dynamic Gantt Chart visualization
• Displays important scheduling metrics:

* Waiting Time
* Turnaround Time
* Average Waiting Time
* Average Turnaround Time

• Clean modular architecture separating:

* User Interface
* Backend API
* Scheduling Engine

---

# Algorithms Implemented

The simulator supports the following CPU scheduling algorithms:

• First Come First Serve (FCFS)
• Shortest Job First (SJF)
• Shortest Remaining Time First (SRTF)
• Round Robin (RR)
• Longest Job First (LJF)
• Longest Remaining Time First (LRTF)

Each algorithm is implemented in **C++ for efficient scheduling computation**.

---

# System Architecture

The project follows a three-layer architecture.

React Frontend → Node.js Backend → C++ Scheduling Engine → JSON Output

Workflow:

1. User enters process details in the React interface.
2. React sends the data to the Node.js backend.
3. The backend passes the input to the C++ scheduler engine.
4. The selected scheduling algorithm executes.
5. Results are written to `output.json`.
6. Backend sends the results back to the frontend.
7. React displays the Gantt Chart and scheduling metrics.

---

# Project Structure

```
OS-scheduling-simulator/
│
├── client-react/                # React frontend (Vite)
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── algorithmselector.jsx
│   │   │   ├── charts.jsx
│   │   │   ├── ganttchart.jsx
│   │   │   ├── header.jsx
│   │   │   ├── metrics.jsx
│   │   │   ├── outputdisplay.jsx
│   │   │   ├── processinput.jsx
│   │   │   ├── processtable.jsx
│   │   │   ├── runsimulation.jsx
│   │   │   └── timequantum.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── eslint.config.js
│
├── cpp-engine/                  # C++ scheduling engine
│   │
│   ├── algorithms/
│   │   ├── fcfs.cpp
│   │   ├── sjf.cpp
│   │   ├── srtf.cpp
│   │   ├── rr.cpp
│   │   ├── ljf.cpp
│   │   └── lrtf.cpp
│   │
│   ├── input.json
│   ├── output.json
│   │
│   ├── main.cpp
│   ├── scheduler.cpp
│   ├── scheduler.hpp
│   ├── process.hpp
│   ├── json.hpp
│   └── scheduler.exe
│
├── server/                      # Node.js backend
│   │
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── README.md
└── .gitignore
```

---

# Installation and Setup

## 1. Clone the repository

```
git clone https://github.com/rajeetvk/OS-scheduling-simulator.git
cd OS-scheduling-simulator
```

---

# Run Frontend

Open a terminal:

```
cd client-react
npm install
npm run dev
```

Frontend will start at:

http://localhost:5173

---

# Run Backend

Open another terminal:

```
cd server
npm install
node server.js
```

Backend runs at:

http://localhost:5000

---

# Compile C++ Scheduler (if needed)

Navigate to the C++ engine directory:

```
cd cpp-engine
g++ main.cpp scheduler.cpp algorithms/*.cpp -o scheduler
```

This creates the executable:

```
scheduler.exe
```

The Node.js backend triggers this executable to run the selected scheduling algorithm.

---

# Simulator Output

The simulator provides:

• Gantt Chart visualization
• Process execution timeline
• Waiting time for each process
• Turnaround time for each process
• Average waiting time
• Average turnaround time

---

# Learning Objectives

This project demonstrates:

• Implementation of CPU Scheduling Algorithms
• Full-stack application development
• Integration between React, Node.js, and C++
• Visualization of operating system concepts
• System architecture design

---

# Future Improvements

• Add Priority Scheduling
• Add Multilevel Queue Scheduling
• Improve UI animations
• Deploy the simulator online

---

# Author

Arjeet Singh
