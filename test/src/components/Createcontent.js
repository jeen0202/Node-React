import React from 'react';

function CreateContent(props){
    console.log('CreateContent render');
    return( 
        <article>
            <h2>Create</h2>
            <form action = "create_process" mothcd = "post" onSubmit={(e)=>{
                e.preventDefault();                
                props.onCreate(
                    e.target.username.value,
                    e.target.dept.value
                )
            }}> 
                <p> 
                    username :   
                    <input type= "text" name = "username"></input>
                </p>
                <p>                    
                    department : 
                    <input type= "text" name = "dept"></input>       
                </p>
                <input type = "submit" value = "Create"></input>             
            </form>
        </article>
    )
}
export default CreateContent;