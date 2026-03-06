function AlgorithmSelector({ algorithm, setAlgorithm }) {

  return (
    <div className="algorithm-row">
    
      <label>Select Algorithm:</label>

      <select
        value={algorithm}
        onChange={(e) => setAlgorithm(e.target.value)}
      >
        <option value="">Select</option>
        <option value="fcfs">FCFS</option>
        <option value="sjf">SJF</option>
        <option value="srtf">SRTF</option>
        <option value="ljf">LJF</option>
        <option value="lrtf">LRTF</option>
        <option value="rr">Round Robin</option>
      </select>

    </div>
  );
}

export default AlgorithmSelector;