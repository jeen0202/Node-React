import React,{useState,useEffect} from 'react';

function UpdateContent(props){
    const [member, setMember] = useState({});
    useEffect(()=>{
        fetch('member/update')
        .then(res=>res.json())
        .then(data=>setmember(data))
    },[]);

    let _member = data;
    return(
        <form action = "update_process" method = "post" ouSubmit={(e)=>{
            e.preventdefault();
            props.onUpdate(
                e.target.username.value,
                e.target.dept.value
            )
        }}>
        <pre>username : <input type = "text" name = "username">{_member.username}</input>
        department : <input type = "text" name = "dept">{member.dept}</input></pre>
        
        </form>
    )
}