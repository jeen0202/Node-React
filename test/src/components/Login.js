import React,{useState,useEffect} from 'react';
import './compenents.css';

function LoginContent(props){
    console.log('LoginContent render');
    const handleSubmit = (e) => {
        e.target.name = e.target.value;
    }
    return(
        <form action = "login_process" method = "post" onSubmit = {(e)=>{
            e.preventDefault();
            let user = {
                'id' : e.target.id.value,
                'pass' : e.target.pass.value
            }

        }}>
        id : <input type = "text" name = "id"></input>
        password : <input type ="password" name = "pass"></input>
        <input type = "submit" value = "login"></input>
        </form>
    )

}