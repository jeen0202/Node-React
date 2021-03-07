const express = require('express');
let bcrypt = require('bcrypt');
let nanoid = require('nanoid').nanoid();
let router = express.Router();
const db = require('../../lib/lowdb')
module.exports = function(passport){

router.post('/login_process', passport.authenticate('local'),
        (req, res) => { 
            console.log(`Passport => ${req.user.nickname}`) 
        let user = {
            "id":req.user.id,
            "nickname":req.user.nickname
        }               
        res.json(user)
        
    });

// router.post('/login_process', (req,res,next)=>{
//     let is_Login = false;
//     let user = db.get('users').find({email:req.body.id}).value()
//     console.log(`login Process => ${req.body.id} ${req.body.pass}`)
//     if(bcrypt.compareSync(req.body.pass,user.pass)){
//         console.log(`Login Complete`)        
//         user.is_Login = true;
//     }else{
//         console.log("Login Fail");
//         user.is_Login = false;
//     }    
//     res.json(user);
// })
router.post('/register_process',(req,res,next)=>{
    console.log(`register ${req.body.id} ${req.body.pass} ${req.body.nickname}`)
    let post = req.body;
    let email = post.id;
    let pass = post.pass;
    let nickname = post.nickname
    bcrypt.hash(pass, 10, function(err,hash){
        db.get('users').push({
            id:nanoid,
            email:email,
            pass:hash,
            nickname:nickname
        }).write();
        res.end(console.log("register complete"))
    })
})
    return router;
}