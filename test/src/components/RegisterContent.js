import React from 'react';
import "./components.scss"

function RegisterContent(props){
    console.log('RegisterContent render');

    return(
        <div className = "listContainer">
            <h2 className = "title">Register your new Account</h2>
            <form action = "register_process" method = "post" onSubmit = {(e)=>{
                e.preventDefault();
                let user = {
                    'id' : e.target.id.value,
                    'pass' : e.target.pass.value,
                    'nickname' : e.target.nickname.value,
                    'passcheck' : e.target.passcheck.value
                }
                props.onRegister(user);
            }}>
                           
                <input className ="formInput" type = "text" name = "id" placeholder = "ID"></input>            
                <input className ="formInput" type ="password" name = "pass" placeholder = "PASSWORD"></input>                
                <input className ="formInput" type ="password" name = "passcheck" placeholder = "PASSWORD CHECK"></input>
                <input className ="formInput" type ="text" name = "nickname" placeholder = "NICKNAME"></input>                
                <input className = "formBtn" type = "submit" value = "REGISTER"></input>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className = "formBtn" type = "button" value = "RETURN" onClick={()=>{
                    props.onReturn();
                }}></input>
            </form>
        </div>
    )
}
export default RegisterContent;