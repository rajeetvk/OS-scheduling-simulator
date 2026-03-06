import { useState } from "react";
import "./App.css";

import Header from "./components/header";
import AlgorithmSelector from "./components/algorithmselector";
import ProcessInput from "./components/processinput";
import RunSimulation from "./components/runsimulation";
import OutputDisplay from "./components/outputdisplay";
import GanttChart from "./components/ganttchart";
import runAlgorithm from "./services/api";
import Chart from "./components/charts";
import Metrics from "./components/metrics";

function App() {

  const [algorithm, setAlgorithm] = useState("");

  const [processes, setProcesses] = useState([
    { pid: "P1", arrival: 0, burst: 0 }
  ]);

  const [timeQuantum, setTimeQuantum] = useState("");

  const [result, setResult] = useState(null);

  const handleRun = async () => {

    const payload = {
      algorithm,
      processes
    };

    if (algorithm === "rr") {
      payload.timeQuantum = Number(timeQuantum);
    }

    try{
      const data = await runAlgorithm(payload);
      setResult(data);
    }
    catch(err){
      console.error("Simulation failed", err);
    }
  };

  return (
    <div className="container">

      <Header />

      {/* Algorithm Selection */}
      <div className="section">
        <h2>Algorithm Selection</h2>

        <AlgorithmSelector
          algorithm={algorithm}
          setAlgorithm={setAlgorithm}
        />
      </div>

      {/* Process Input */}
      <div className="section">

        <h2>Process Configuration</h2>

        <ProcessInput
          processes={processes}
          setProcesses={setProcesses}
        />

        {algorithm === "rr" && (
          <div className="quantum-box">

            <label>Time Quantum</label>

            <input
              type="number"
              value={timeQuantum}
              onChange={(e) => setTimeQuantum(e.target.value)}
            />

          </div>
        )}

        <RunSimulation runSimulation={handleRun} />

      </div>

      {/* Results */}
      {result && (
        <>
          <div className="section">
            <h2>Scheduling Metrics</h2>
            <Metrics result={result} />
          </div>

          <div className="section">

            <h2>Performance Analysis</h2>

            <div className="chart-container">
              <Chart result={result} />
            </div>

          </div>

          <div className="section">

            <h2>CPU Scheduling Timeline</h2>

            <div className="gantt-wrapper">
              <GanttChart data={result.ganttChart} />
            </div>

          </div>
        </>
      )}

    </div>
  );
}

export default App;