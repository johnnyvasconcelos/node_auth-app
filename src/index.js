'use strict';

import express from 'express';

const app = express();

const port = 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server, port ${port}`);
});

app.get('/', (req, res) => {
  res.render();
});
