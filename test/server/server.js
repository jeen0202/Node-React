const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require("../lib/lowdb")
// db.get('users').push({
//     id:1,
//     username:"sejin",
//     dept:"develope"
// }).write();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
const indexRouter = require('./routes/index');
const memberRouter = require('./routes/member');

app.use(cors());
app.use(indexRouter);
app.use('/member',memberRouter);

app.listen(port, () => {
    console.log(`listen on port ${port}`);
})