const express = require('express');
let bcrypt = require('bcrypt');
let nanoid = require('nanoid').nanoid();
let router = express.Router();
const db = require('../../lib/lowdb')
module.exports = function(passport){

// Passport 구현은 생각보다 어렵;;    
// router.post('/login_process', passport.authenticate('local'),
//         (req, res) => { 
//             console.log(`Passport => ${req.user.nickname}`) 
//         let user = {
//             "id":req.user.id,
//             "nickname":req.user.nickname
//         }               
//         res.json(user)
        
//     });

router.post('/login_process', (req,res,next)=>{    
    let user = db.get('users').find({email:req.body.id}).value()
    console.log(`login Process => ${req.body.id} ${req.body.pass}`)
    if(user){
        if(bcrypt.compareSync(req.body.pass,user.pass)){
            console.log(`Login Complete`)        
            user.is_Login = true;
            res.json(user);
        }
    }else{
        user = {is_Login:false};
        console.log("Login Fail");      
        res.json(user);
    }
    
})
router.post('/register_process',(req,res,next)=>{
    console.log(`register ${req.body.id} ${req.body.pass} ${req.body.nickname} ${req.body.passcheck}`)
    let post = req.body;
    let email = post.id;
    let pass = post.pass;
    let passcheck = post.passcheck;
    let nickname = post.nickname
    if(!nickname){
        nickname = email;
    }
    if(email){
     if(pass===passcheck){
    bcrypt.hash(pass, 10, function(err,hash){
        db.get('users').push({
            id:nanoid,
            email:email,
            pass:hash,
            nickname:nickname
        }).write();
        res.end(console.log("register complete"))
    })}else{
        res.end(console.log("register Fail => Password Inconsistence!!"))
    }}else{
        res.end(console.log("register Fail => Empty Email!!"))
    }
})
    return router;
}