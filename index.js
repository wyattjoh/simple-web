const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Simple demo completed! You\'re currently running v1.0.2.');
});

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
