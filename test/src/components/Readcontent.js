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
    
    let lists= [];
    for(let i = 0; i<userdata.length;i++){
        lists.push(<p>name : {userdata[i].username} dept : {userdata[i].dept}</p>)
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
