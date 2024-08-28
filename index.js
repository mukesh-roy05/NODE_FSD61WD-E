const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/stats", (req, res) => {
  fs.stat("./Files/test.txt", (err, stats) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        size: `$(stats.size) bytes`,
        isFile: stats.isFile(),
        isDirectory: stats.isDirectory(),
        isSymbolicLink: stats.isSymbolicLink(),
      });
    }
  });
});

app.post("/create", (req, res) => {
  fs.writeFile("./Files/newFile.txt", "Hello World", (err) => {
    if (err) {
      res.send(err);
    }
    res.send("File Created Successfully");
  });
});

app.post("/read", (req, res) => {
  fs.readFile("./Files/test.txt", "utf8", (err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
});

app.listen("3000", "localhost", () => {
  console.log(`Server is running on http://localhost:3000`);
});
