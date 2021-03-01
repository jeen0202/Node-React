import React,{useState,useEffect} from 'react';

function UpdateContent(props){
    console.log("UpdateContent render")
    const [member, setMember] = useState({});
    useEffect(()=>{
    },[]);

    
    return(
        <form action = "update_process" method = "post" ouSubmit={(e)=>{
            e.preventdefault();
            props.onUpdate(
                e.target.username.value,
                e.target.dept.value
            )
        }}>
        username : <input type = "text" name = "username">{member.username}</input><br></br><br></br>
        department : <input type = "text" name = "dept">{member.dept}</input><br></br>
        <input type = "submit" value = "update"></input>
        
        </form>
    )
}
export default UpdateContent;