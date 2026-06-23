async function runAlgorithm(data) {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
    const response = await fetch(`${API_URL}/run`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}
export default runAlgorithm;