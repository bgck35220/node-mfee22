const http = require('http');
require('dotenv').config();
const server = http.createServer(function (request, response) {
  response.end('Hello,Server');
});

let port = process.env.SERCER_PORT || 3000;
server.listen(port, () => {
  console.log(`我們簡易版server ${port}`);
});
