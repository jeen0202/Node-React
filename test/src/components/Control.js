import React, {Component} from 'react';
import "./components.scss"
class Control extends Component{  
    render(){
      let _control = null;      
      console.log('Control render');
      if(this.props.is_login){      
        _control = 
        <control className ="controlContainer">
        <input className ="controlBtn" type ="button" value = "Create" onClick={(e)=>{
          e.preventDefault();
          this.props.onChangeMode('create')
        }}></input> <input className ="controlBtn" type = "button" value = "Logout" onClick={(e)=>{
          e.preventDefault();
          this.props.onLogout();
        }}></input>        
        </control> 
      }else{
        _control = <pre>
         <input type ="button" className="frontBtn" value = "get Started" onClick={(e)=>{
          e.preventDefault();
          this.props.onChangeMode('login')
        }}></input>          
        </pre>
      }
      return(        
        _control
      );
    }
  }
export default Control;