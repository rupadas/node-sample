const express = require('express');
const app = express();

app.get('/apps', (req, res) => {
  res.send('Node 8 Running! New version 3.0.4');
});

const port = process.env.PORT || 3037;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
