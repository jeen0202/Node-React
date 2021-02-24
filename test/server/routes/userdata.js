const express = require('express');
const router = express.Router();


router.get("/",(req,res)=>{
    res.json({userName : "Sejing"})
})

module.exports = router;