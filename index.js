const express = require("express");

const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  res.send("Task to create a file");
});

app.post("/create", (req, res) => {
  const data = req.body;
  fs.writeFile("./Files/data.json", JSON.stringify(data), (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("File created successfully");
    }
  });
});

app.listen(3000, () => {
  console.log("Server Started on Port 3000");
});
