import React,{useState,useEffect} from 'react';

function ReadContent(props){
    console.log('ReadContent render');
    const [isContent, setIsContent] = useState(true);
    const [userdata, setUserdata] = useState({});
    useEffect(()=>{        
        fetch('/users')
        .then(res=>res.json())
        .then(data=>setUserdata(data))         
       
    },[]);
    if(!userdata){setIsContent(false)}
    if(isContent){ 
        return(
            <div>
            <p>username : {userdata.username}</p>  
            <p>devname : {userdata.devname}</p>
            </div>
        )
    }
    else{
        return(null);
    }
}
export default ReadContent;
