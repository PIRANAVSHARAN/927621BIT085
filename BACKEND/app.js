const express = require('express');
const app = express();
const port = 3001;

const apiRouter = require('./routes/api');

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
