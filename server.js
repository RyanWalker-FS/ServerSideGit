const http = require("http");
require("dotengo").config();

const server = http.createServer((req, res) => {
  const { header, url, method } = req;
  res.end;
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log("listening on ${PORT}");
});
