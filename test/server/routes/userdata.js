const express = require('express');
const router = express.Router();


router.get("/",(req,res)=>{
    res.json({userName : "Sejing"})
})
router.get("/group" , (req,res)=>{
    res.json({userName : 'Develope'})
})

module.exports = router;