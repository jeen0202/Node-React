import React from 'react';
import "./components.css"

function RegisterContent(props){
    console.log('RegisterContent render');

    return(
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
            <input type = "text" name = "id" placeholder = "ID"></input>
            </p><p>
            <input type ="password" name = "pass" placeholder = "PASSWORD"></input>
            </p><p>
            <input type ="text" name = "nickname" placeholder = "NICKNAME"></input>
            </p>
            <input type = "submit" value = "Register"></input>
        </form>
    )
}
export default RegisterContent;