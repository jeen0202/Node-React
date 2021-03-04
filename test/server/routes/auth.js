const express = require('express');
const router = express.Router();
const db = require('../../lib/lowdb')

router.post('/login_process', (req,res,next)=>{
    console.log(`login Process => ${req.body.id} ${req.body.pass}`)
    if(db.get('users').find({id:req.body.id, pass:req.body.pass}).value()){
        console.log(`Login Complete`)
    }else{
        console.log("Login Fail");
    }
    res.end(console.log('login_process END'))
})
router.post('/register_process',(req,res,next)=>{
    console.log(`register ${req.body.id} ${req.body.pass} ${req.body.nickname}`)
    db.get('users').push({
        id:req.body.id,
        pass:req.body.pass,
        nickname:req.body.nickname
    }).write();
    res.end(console.log("register complete"))
})

module.exports = router;