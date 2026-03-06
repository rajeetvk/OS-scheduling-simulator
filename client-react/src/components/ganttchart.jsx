function GanttChart({ data }) {

  if (!data) return null;

  return (
    <div
      style={{
        width: "100%",
        overflowX: "auto",
        display: "flex",
        justifyContent: "center",
        marginTop: "20px"
      }}
    >
      <div
        style={{
          display: "flex",
          minWidth: "max-content"
        }}
      >
        {data.map((item, index) => (

          <div
            key={index}
            style={{
              border: "1px solid #94a3b8",
              padding: "15px 20px",
              minWidth: "90px",
              textAlign: "center",
              background: "#1e293b",
              color: "white"
            }}
          >
            <div style={{ fontWeight: "bold" }}>
              P{item.id}
            </div>

            <div style={{ fontSize: "12px", marginTop: "6px" }}>
              {item.start} - {item.end}
            </div>

          </div>

        ))}
      </div>
    </div>
  );
}

export default GanttChart;