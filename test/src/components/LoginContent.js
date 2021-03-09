import React from 'react';
import "./components.scss"

function LoginContent(props){
    console.log('LoginContent render');
    
    return(
        <div className = "container">
        <h2 className ="title">Login to your Account</h2>
        <form action = "login_process" method = "post" onSubmit = {(e)=>{
            e.preventDefault();
            let user = {
                'id' : e.target.id.value,
                'pass' : e.target.pass.value
            }
            props.onLogin(user);
        }}>
        <input className ="formInput" type = "text" name = "id" title="username" placeholder="username" /><br></br>
        <input className ="formInput" type ="password" title="password" name = "pass" placeholder="password"/><br></br>
        <input className = "formBtn" type = "submit" value = "login"></input>
        <div className="forgot" onClick={()=>{
            props.onForgot();
        }}>Don't have Account?</div>
        </form>
        </div>
    )

}
export default LoginContent;