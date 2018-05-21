const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/api', (req, res) => {
  res.json({express: 'Hello'});
});

app.listen(port, () => {
  console.log(`App open on ${port}`);
})