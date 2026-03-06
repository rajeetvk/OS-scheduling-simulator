function TimeQuantum({ algorithm, timeQuantum, setTimeQuantum }) {

  if (algorithm !== "rr") return null;

  return (
    <div>

      <label>Time Quantum:</label>

      <input
        type="number"
        value={timeQuantum}
        onChange={(e)=>setTimeQuantum(e.target.value)}
      />

    </div>
  );
}

export default TimeQuantum;