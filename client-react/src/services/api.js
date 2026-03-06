async function runAlgorithm(data)
{
    const response =await fetch("http://localhost:3000/run",{
         method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    })
    return await response.json();
}
export default runAlgorithm;