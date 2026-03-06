function ProcessInput({ processes, setProcesses }) {

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

      <table border="1" cellPadding="5">

        <thead>
          <tr>
            <th>PID</th>
            <th>Arrival Time</th>
            <th>Burst Time</th>
          </tr>
        </thead>

        <tbody>

          {processes.map((p, index) => (

            <tr key={index}>

              <td>{p.pid}</td>

              <td>
                <input
                  type="number"
                  value={p.arrival}
                  onChange={(e) =>
                    updateProcess(index, "arrival", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  value={p.burst}
                  onChange={(e) =>
                    updateProcess(index, "burst", e.target.value)
                  }
                />
              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <br />

      <button onClick={addProcess}>
        Add Process
      </button>

    </div>
  );
}

export default ProcessInput;