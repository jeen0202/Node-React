const express =require('express');
const router = express.Router();    

router.use(express.json())
router.get("/",(req,res,next)=>{
    res.end("index route /");
})
router.post("/create",(req,res,next)=>{
    let name = req.body.username;
    let dept = req.body.dept;
    console.log(req.body);
    res.end(console.log(`name : ${name} dept : ${dept}`))
    
})

module.exports = router;