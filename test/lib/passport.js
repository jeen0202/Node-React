const db = require('./lowdb');
const bcrypt = require('bcrypt');
const passport = require('../../../myTodo/lib/passport');

module.exports = (app)=>{
    let passport = require('passport')
    ,LocalStrategy = require('passport-local').Strategy


app.use(passport.initialize()); //passport 초기화
app.use(passport.session());

passport.serializeUser(function(user, done) {
    console.log('seriallizeUser', user)
    done(null, user.id); //done 함수의 매개변수에 식별자
  });
  //page를 호출할때마다 같이 호출되는 callback 함수(페이지 방문시 마다 인증된 사용자인지 확인)
  passport.deserializeUser(function(id, done) {   
    var user = db.get('users').find({id:id}).value();    
    console.log('deseriallizeUser', id, user)
    done(null,user)//원래는 사용자 정보를 조회해야한다.
  });

  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
    function(email, password, done) {   
      console.log('LocalStrategy', email, password);
      var user = db.get('users').find({email:email}).value(); 
      if(user){
        if(bcrypt.compareSync(password,user.password)){
          return done(null, user,{
            message: "Login success."
            });
        }else{
          return done(null,false,{
            message : 'Incorrect password.'
          });
        }

      }
      else{
        return done(null,false,{
          message : 'There is no email.'
        });
      } 
    }
  ))
  return passport
};