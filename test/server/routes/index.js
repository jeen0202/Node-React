const express =require('express');
const router = express.Router();
const db = require('../../lib/lowdb');    

router.use(express.json())
router.get("/",(req,res,next)=>{
    res.end("index route /");
})
router.post("/create",(req,res,next)=>{
    let name = req.body.username;
    let dept = req.body.dept;
    let id = db.get('users')
    .size()
    .value()
    db.get('users').push({
        id : id+1,
        username: name,
        dept : dept
    }).write();
    res.end(console.log(`name : ${name} dept : ${dept}`))
    
})

module.exports = router;