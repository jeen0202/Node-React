import React,{useState,useEffect} from 'react';
import './components.css';
function ReadContent(props){
    console.log('ReadContent render');
    const [isContent, setIsContent] = useState(true);
    const [userdata, setUserdata] = useState({});
    useEffect(()=>{        
        fetch('/member/read')
        .then(res=>res.json())
        .then(data=>setUserdata(data))         
       
    },[]);
    
    let lists= [];
    for(let i = 0; i<userdata.length;i++){
        lists.push(        
        <pre class = "list">id : {userdata[i].id}<br></br>
            name : {userdata[i].username}<br></br>
            dept : {userdata[i].dept}</pre>
        )
        
    }
                   
    
    if(!userdata){setIsContent(false)}
    if(isContent){ 
        return(
            <div>
            <p>Hello Node&React!!!</p>
            {lists}
            </div>            
                      
        )
    }
    else{
        return(null);
    }
}
export default ReadContent;
