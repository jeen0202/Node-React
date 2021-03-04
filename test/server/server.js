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
const authRouter = require('./routes/auth')

app.use(cors());
app.use(indexRouter);
app.use('/server/member', memberRouter);
app.use('/server/auth' , authRouter);
app.listen(port, () => {
    console.log(`listen on port ${port}`);
})