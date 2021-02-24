const express =require('express');
const router = expree.Router();

router.get("/",(req,res,next)=>{
    res.end("index route /");
})

module.exports = router;