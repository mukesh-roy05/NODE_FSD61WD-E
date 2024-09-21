const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint to create a text file with current timestamp
app.get("/create-file", (req, res) => {
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
        return res.status(500).json({ error: "Failed to write file" });
      }

      res.json({ message: `File created: ${fileName}`, path: filePath });
    });
  });
});


// New endpoint to retrieve all text files
app.get('/list-files', (req, res) => {
    const directoryPath = path.join(__dirname, 'files');

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read directory' });
        }

        // Filter for text files
        const textFiles = files.filter(file => file.endsWith('.txt'));

        res.json({ files: textFiles });
    });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
