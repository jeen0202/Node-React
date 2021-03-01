import React,{useState,useEffect} from 'react';

function UpdateContent(props){
    console.log("UpdateContent render")
    const [member, setMember] = useState({});
    useEffect(()=>{
        setMember(props.selectedMember)
    },[]);

    
    return(
        <form action = "update_process" method = "post" >
        username : <input type = "text" name = "username" value = {member.username}></input>
        department : <input type = "text" name = "dept" value = {member.dept}></input>
        <input type = "submit" value = "update"></input>        
        </form>
    )
}
export default UpdateContent;