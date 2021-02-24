
import './App.css';
import React from 'react';
class App extends React.Component {  

  constructor(props){
    super(props);
    this.state ={
      username:null
    };
  }

  componentDidMount(){
    fetch('/users')
      .then(res=>res.json())
      .then(data=>this.setState({username:data.userName}))
    
     fetch('/users/group')
      .then(res=>res.json())
      .then(data=>this.setState({devname:data.userName}))
  };

  render(){
  return (
    <div className="App">
      <p>Hello Node&React!!!</p>   
      <p>username : {this.state.username}</p>  
      <p>devname : {this.state.devname}</p>
    </div>
  );
}
}
export default App;
