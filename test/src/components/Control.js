import React, {Component} from 'react';

class Control extends Component{  
    render(){
      let _control = null;      
      console.log('Control render');
      if(this.props.is_login){      
        _control = <pre><h2 className="mainTitle">Hello {this.props.nickname} </h2>
        <input type ="button" value = "Create" onClick={(e)=>{
          e.preventDefault();
          this.props.onChangeMode('create')
        }}></input> <input type = "button" value = "Logout" onClick={(e)=>{
          e.preventDefault();
          this.props.onLogout();
        }}></input>
        </pre> 
      }else{
        _control = <pre><h2 className ="mainTitle">Human Resource Management Program</h2>
         <input type ="button" value = "Login" onClick={(e)=>{
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