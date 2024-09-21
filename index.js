const express = require("express");

const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  res.send("Task to create a file");
});

app.post("/create", (req, res) => {
  const currentTimestamp = new Date().toISOString();
  const dateTimeString = new Date()
    .toISOString()
    .replace(/[:T]/g, "-")
    .split(".")[0];
  const fileName = `${dateTimeString}.txt`;
  const filePath = path.join(__dirname, "files", fileName);

  // Ensure the 'files' directory exists
  fs.mkdir(path.join(__dirname, "files"), { recursive: true }, (err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to create directory" });
    }

    // Write the timestamp to the file
    fs.writeFile(filePath, currentTimestamp, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("File created successfully");
      }
    });
  });
});

app.listen(3000, () => {
  console.log("Server Started on Port 3000");
});
