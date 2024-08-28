// server.js
const http = require("http");

const server = http.createServer((request, response) => {
  const { url, method } = request;
  if (url === "/") {
    if (method === "GET") {
      return response.end("GET World");
    } else if (method === "POST") {
      return response.end("POST World");
    }
  } else if (url === "/test") {
    return response.end("Hello World");
  } else return response.end("Endpoint not found");
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Server Listening on 127.0.0.1:3000");
});

// run with `node server.mjs`
