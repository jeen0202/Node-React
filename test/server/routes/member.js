const express = require('express');
const router = express.Router();
const db = require('../../lib/lowdb')

router.get("/read",(req,res)=>{
    const userdata = db.get('members').value();
    console.log('express userdata => ',userdata);
    res.json(userdata)
})
router.post("/create",(req,res,next)=>{
    let name = req.body.username;
    let dept = req.body.dept;
    let id = db.get('members')
    .size()
    .value()
    db.get('members').push({
        id : id+1,
        username: name,
        dept : dept
    }).write();
    res.end(console.log(`name : ${name} dept : ${dept}`))
    
})

module.exports = router;