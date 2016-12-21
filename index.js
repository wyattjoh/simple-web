const pkg = require('./package.json');
const express = require('express');
const app = express();

app.use((req, res) => {
  res.json(pkg);
});

const port = process.env.PORT || 8000;

app.listen(port, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Server listening on port ${port}`);
});
