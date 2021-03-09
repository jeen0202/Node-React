import React from 'react';
import "./components.scss"

function RegisterContent(props){
    console.log('RegisterContent render');

    return(
        <div className = "container">
            <h2 className = "title">Register your new Account</h2>
            <form action = "register_process" method = "post" onSubmit = {(e)=>{
                e.preventDefault();
                let user = {
                    'id' : e.target.id.value,
                    'pass' : e.target.pass.value,
                    'nickname' : e.target.nickname.value
                }
                props.onRegister(user);
            }}>
                <p>           
                <input className ="formInput" type = "text" name = "id" placeholder = "ID"></input>
                </p><p>
                <input className ="formInput" type ="password" name = "pass" placeholder = "PASSWORD"></input>
                </p><p>
                <input className ="formInput" type ="text" name = "nickname" placeholder = "NICKNAME"></input>
                </p>
                <input className = "formBtn" type = "submit" value = "Register"></input>
            </form>
        </div>
    )
}
export default RegisterContent;