const http = require("http");
require("dotenv").config();
const router = require("./app");
const server = http.createServer(router);

const PORT = 3000;

server.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
