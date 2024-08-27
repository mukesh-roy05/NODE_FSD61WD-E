// server.js
const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request);
  console.log(request.body);
  response.end("First Node Server!\n");
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Server Listening on 127.0.0.1:3000");
});

// run with `node server.mjs`
