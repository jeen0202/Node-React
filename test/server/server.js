const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
const indexRouter = require('./routes/index');
const memberRouter = require('./routes/member');
const authRouter = require('./routes/auth')

let passport = require('../lib/passport')(app);
app.use(cors());
app.use(indexRouter);
app.use('/server/member', memberRouter);
app.use('/server/auth' , authRouter(passport));
app.listen(port, () => {
    console.log(`listen on port ${port}`);
})