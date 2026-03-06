function OutputDisplay({ result }) {

  if (!result) return null;

  return (
    <div>

      <h3>Output</h3>

      <pre>
        {JSON.stringify(result, null, 2)}
      </pre>

    </div>
  );
}

export default OutputDisplay;