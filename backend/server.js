const http = require("http");
const app = require("./index");
const PORT = 3000;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
