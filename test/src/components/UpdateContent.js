import React,{useState,useEffect} from 'react';

function UpdateContent(props){
    console.log("UpdateContent render")
    const [member, setMember] = useState({});
    useEffect(()=>{
        setMember(props.selectedMember)         
    },[props]);
    const handleSubmit = (e) => {
        setMember({[e.target.name]:e.target.value})
    }
    
    return(
        <form action = "update_process" method = "post" onSubmit={(e)=>{
            e.preventDefault();
            props.onUpdate(e.target.id.value,e.target.username.value,e.target.dept.value)
        }}>
        <input type = "hidden" name = "id" value = {member.id}></input>
        username : <input type = "text" name = "username" value = {member.username} onChange={handleSubmit}></input>
        department : <input type = "text" name = "dept" value = {member.dept} onChange={handleSubmit}></input>
        <input type = "submit" value = "update"></input>        
        </form>
    )
}
export default UpdateContent;