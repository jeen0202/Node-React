import React from 'react';

function CreateContent(props){
    console.log('CreateContent render');
    return( 
        <pre className="listContainer">
            <h2 className="mainTitle">Create Member</h2>
            <form action = "create_process" method = "post" onSubmit={(e)=>{
                e.preventDefault();                
                props.onCreate(
                    e.target.username.value,
                    e.target.dept.value
                )
            }}> 
                <input className ="formInput" type = "text" name = "membername" title="username" placeholder="USERNAME" /><br></br>
                <input className ="formInput" type = "text" name = "dept" title="department" placeholder="DEPARTMENT" /><br></br>
                <input className = "formBtn" type = "submit" value = "CREATE"></input>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className = "formBtn" type = "button" value = "RETURN" onClick={()=>{                    
                    props.onReturn();                                    
                }}></input>
            </form>
        </pre>
    )
}
export default CreateContent;