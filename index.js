const http = require('http');

const server = http.createServer((req, res) => {
  res.end(JSON.stringify({
    env: process.env,
    v: 'v1.0.1'
  }));
});

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
