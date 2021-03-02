import React,{useState} from 'react';

function UpdateContent(props){
    console.log("UpdateContent render")
    const [member, setMember] = useState(props.selectedMember);
    const handleSubmit = (e) => {
        setMember({[e.target.name]:e.target.value})
    }
    
    return(
        <form action = "update_process" method = "post" onSubmit={(e)=>{
            e.preventDefault();
            let member = {
                'id' : Number(e.target.id.value),
                'username' : e.target.username.value,
                'dept' : e.target.dept.value
            }
            props.onUpdate(member)
        }}>        
        username : <input type = "text" name = "username" value = {member.username} onChange={handleSubmit}></input>
        department : <input type = "text" name = "dept" value = {member.dept} onChange={handleSubmit}></input>
        <input type = 'hidden' name = "id" value = {member.id}></input>
        <input type = "submit" value = "update"></input>        
        </form>
    )
}
export default UpdateContent;