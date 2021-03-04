const express = require('express');
const router = express.Router();
const db = require('../../lib/lowdb')

router.post('/login_process', (req,res,next)=>{
    console.log(`router => ${req.body.id} ${req.body.pass}`)
    //db.get('users').find({id:req.body})
    res.end(console.log('login_process!!'))
})


module.exports = router;