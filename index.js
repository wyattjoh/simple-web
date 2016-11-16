const http = require('http');

const server = http.createServer((req, res) => {
  res.end(`It Works!! Path Hit: ${req.url}\n`);
});

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
