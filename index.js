const express = require('express');
const app = express();

app.get('/apps', (req, res) => {
  res.send('Hello, Node 8!');
});

const port = process.env.PORT || 3007;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
