const http = require("http");
const hostname = "localhost";
const port = 4000;

const server = http.createServer((req, res) => {
  res.end("Hello RSI , notre premiere app Nodejs");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// console.log("Hello RSI");
// const date = new Date();
// console.log("Date du jour et heure actuelle : ", date.toISOString());
