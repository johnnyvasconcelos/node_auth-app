'use strict';

import { register } from './register.js';
import { login } from './login.js';
import { home } from './home.js';

import express from 'express';

const app = express();

app.use(express.static('src/public'));

const port = 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server, port ${port}`);
});

app.get('/', (req, res) => {
  res.send(home);
});

app.get('/register', (req, res) => {
  res.send(register);
});

app.get('/login', (req, res) => {
  res.send(login);
});
