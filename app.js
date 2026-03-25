const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Inner Loop v1');
});

app.listen(3000);
