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
router.post("/update",(req,res,next)=>{
    let id = req.body.id;
    let member = db.get('members').find({id:id}).value();
    //console.log("Selected member : ",member);
    res.json(member);
})
router.post("/update_process",(req,res,next)=>{
    let member = {
        "id" : req.body.id,
        "username" : req.body.username,
        "dept" : req.body.dept
    }
    console.log("Update Member : ",member)
    db.get('members').find({id:member.id}).assign(member).write();
    res.end(console.log('update Complete'))
})
router.post('/delete',(req,res,next)=>{
    let id = req.body.id;
    if(db.get('members').remove({id:id}).write()){
        res.end(console.log('delete complete!!'))
    }
    else{
        res.end(console.log('error occured!!'))
        }  
})

module.exports = router;