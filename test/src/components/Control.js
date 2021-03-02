import React, {Component} from 'react';

class Control extends Component{  
    render(){      
      console.log('Control render');
      return(
        <pre>
        <input type ="button" value = "Create" onClick={(e)=>{
          e.preventDefault();
          this.props.onChangeMode('create')
        }}></input>  <input type ="button" value = "Login" onClick={(e)=>{
          e.preventDefault();
          this.props.onChangeMode('login')
        }}></input>  <input type ="button" value = "Register" onClick={(e)=>{
          e.preventDefault();
          this.props.onChangeMode('register')
        }}></input>
        </pre>
      );
    }
  }
export default Control;