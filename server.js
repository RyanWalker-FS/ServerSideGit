const http = require("http");
require("dotenv").config();
const router = require("./app");
const server = http.createServer(router);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
