import React,{useState,useEffect} from 'react';
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
        <list>
        <p> id : {userdata[i].id}</p>            
        <div>name : {userdata[i].username} dept : {userdata[i].dept}</div>
        </list>)
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
