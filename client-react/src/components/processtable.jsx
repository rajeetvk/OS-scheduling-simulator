function ProcessTable({ processes, setProcesses }) {

  const updateProcess = (index, field, value) => {

    const updated = [...processes];
    updated[index][field] = Number(value);

    setProcesses(updated);
  };

  const addProcess = () => {

    const newProcess = {
      pid: "P" + (processes.length + 1),
      arrival: 0,
      burst: 0
    };

    setProcesses([...processes, newProcess]);
  };

  return (
    <div>

      <h3>Processes</h3>

      {processes.map((p, index) => (

        <div key={index}>

          <span>{p.pid}</span>

          <input
            type="number"
            value={p.arrival}
            onChange={(e) =>
              updateProcess(index,"arrival",e.target.value)
            }
          />

          <input
            type="number"
            value={p.burst}
            onChange={(e) =>
              updateProcess(index,"burst",e.target.value)
            }
          />

        </div>

      ))}

      <button onClick={addProcess}>
        Add Process
      </button>

    </div>
  );
}

export default ProcessTable;