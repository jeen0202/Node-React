const express =require('express');
const router = express.Router();
const db = require('../../lib/lowdb');    

router.use(express.json())
router.get("/",(req,res,next)=>{
    res.end("index route /");
})

module.exports = router;