const http = require("http");
require("dotengo").config();

const server = http.createServer();

server.listen(pross.env.PORT, () => {
  console.log("listening on ${pross.env.PORT}");
});
