function Metrics({ result }) {

  if (!result) return null;

  const avgWT = result.averageWaitingTime.toFixed(2);
  const avgTAT = result.averageTurnAroundTime.toFixed(2);
  const totalProcesses = result.processes.length;

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      margin: "20px"
    }}>

      <div style={cardStyle}>
        <h3>Average Waiting Time</h3>
        <p>{avgWT}</p>
      </div>

      <div style={cardStyle}>
        <h3>Average Turnaround Time</h3>
        <p>{avgTAT}</p>
      </div>

      <div style={cardStyle}>
        <h3>Total Processes</h3>
        <p>{totalProcesses}</p>
      </div>

    </div>
  );
}

const cardStyle = {
  backgroundColor: "#ffffff",
  border: "2px solid #e0e0e0",
  padding: "20px",
  width: "220px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
  color: "#2c3e50"
};

export default Metrics;