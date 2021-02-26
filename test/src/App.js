
import React from 'react';

import ReadContent from "./components/Readcontent";
import CreateContent from "./components/Createcontent";
import Control from "./components/Control";

class App extends React.Component {  
  constructor(props){
    super(props);
    this.state = {
      mode:'default'
    }
  }
  getContent(){
    var _article = null;
    if(this.state.mode === "default"){
      _article = <ReadContent></ReadContent> 
    }else if(this.state.mode === "create"){
      _article = <CreateContent onCreate = {(_username,_dept)=>{
        fetch('http://localhost:3001/create' ,{
          method : "POST",
          headers: {
            'Content-Type': 'application/json',
            },        
          body : JSON.stringify({
          'username' : _username,
          'dept' : _dept
          })
        })        
        .then(response => {
          this.setState({mode:'default'})
        })      
      }}></CreateContent>
    }
    
    return _article;
  }
  render(){
    console.log('App render')
  return (
    <div className="App">
      {this.getContent()}
      <Control onChangeMode = {(_mode)=>{
        this.setState({mode:_mode})
      }}></Control>
    </div>
  );
}
}
export default App;
