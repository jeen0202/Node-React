const express = require('express');
const router = express.Router();
const db = require('../../lib/lowdb')

router.get("/",(req,res)=>{
    const userdata = db.get('users').value();
    console.log('express userdata => ',userdata);
    res.json(userdata)
})

module.exports = router;