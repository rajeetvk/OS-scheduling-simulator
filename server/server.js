const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const CPP_ENGINE_PATH = path.join(__dirname, "../cpp-engine");

app.post("/run", (req, res) => {

    const inputPath = path.join(CPP_ENGINE_PATH, "input.json");
    const outputPath = path.join(CPP_ENGINE_PATH, "output.json");
    const exePath = path.join(CPP_ENGINE_PATH, "scheduler.exe");

    // Write request body to input.json
    fs.writeFileSync(inputPath, JSON.stringify(req.body, null, 4));

    // Execute C++ engine
    exec(exePath, { cwd: CPP_ENGINE_PATH }, (error, stdout, stderr) => {

        if (error) {
            console.error("Execution Error:", error);
            return res.status(500).json({ error: "Execution failed" });
        }

        try {
            const result = fs.readFileSync(outputPath);
            const jsonResult = JSON.parse(result);
            res.json(jsonResult);
        } catch (err) {
            res.status(500).json({ error: "Failed to read output" });
        }
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});