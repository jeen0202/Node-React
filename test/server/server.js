const express = requires('express');
const app = express();

const indexRouter = require('./routes/index');

app.user(indexRouter);

const port = po