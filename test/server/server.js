const express = requires('express');
const app = express();
const port = process.env.PORT || 3001;
const indexRouter = require('./routes/index');

app.user(indexRouter);

app.listen(port, () => console.log(`listen on port ${port}`))