const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome on my homepage");
  }
  if (req.url === "/about") {
    res.end("here is my short story");
  }
  res.end("<h1>Oops</h1>");
});

server.listen(3000);
