const http = require('http');

const server = http.createServer((req, res) => {
  res.end(JSON.stringify(process.env));
});

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
