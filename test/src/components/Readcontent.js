import React,{useState,useEffect} from 'react';
import './components.css';
function ReadContent(props){
    console.log('ReadContent render');
    const [isContent, setIsContent] = useState(true);
    const [userdata, setUserdata] = useState({});
    useEffect(()=>{        
        fetch('server/member/read')
        .then(res=>res.json())
        .then(data=>setUserdata(data))         
       
    },[]);
    
    let lists= [];
    for(let i = 0; i<userdata.length;i++){
        lists.push(        
        <pre className="list" key = {userdata[i].id}>id : {userdata[i].id}<br></br>
            name : {userdata[i].username}<br></br>
            dept : {userdata[i].dept}<br></br>
            <input type = "button" value = "update" onClick = {()=>{
                props.onUpdate(userdata[i].id)
            }}></input><input type ="button" value = "delete" onClick = {()=>{
                props.onDelete(userdata[i].id)
            }}></input>
            </pre>
        )
        
    }
                   
    
    if(!userdata){setIsContent(false)}
    if(isContent){ 
        return(
            <div>            
            {lists}
            </div>            
                      
        )
    }
    else{
        return(null);
    }
}
export default ReadContent;
