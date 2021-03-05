import React, {Component} from 'react';

class Control extends Component{  
    render(){
      let _control = null;      
      console.log('Control render');
      if(this.props.is_login){      
        _control = <pre> Hello <input type ="button" value = "Create" onClick={(e)=>{
          e.preventDefault();
          this.props.onChangeMode('create')
        }}></input> <input type = "button" value = "Logout" onClick={(e)=>{
          e.preventDefault();
          this.props.onLogout();
        }}></input>
        </pre> 
      }else{
        _control = <pre> <input type ="button" value = "Login" onClick={(e)=>{
          e.preventDefault();
          this.props.onChangeMode('login')
        }}></input>
          <input type ="button" value = "Register" onClick={(e)=>{
          e.preventDefault();
          this.props.onChangeMode('register')
        }}></input>
        </pre>
      }
      return(        
        _control
      );
    }
  }
export default Control;