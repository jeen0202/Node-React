
import React from 'react';

import ReadContent from "./components/Readcontent";
import CreateContent from "./components/Createcontent";
import UpdateContent from "./components/UpdateContent";
import Control from "./components/Control";

class App extends React.Component {  
  constructor(props){
    super(props);
    this.state = {
      mode:'default'
    }
  }
  getContent(){
    var _article,_selectedMember = null;
    if(this.state.mode === "default"){
      _article = <ReadContent onUpdate= {(_id)=>{
        fetch('http://locahhost:3001/member/update')
        .then(res=>res.json())
        .then(data=>_selectedMember =data) 
        .then(this.setState({mode:'update'})
        )
      }}></ReadContent> 
    }else if(this.state.mode === "create"){
      _article = <CreateContent onCreate = {(_username,_dept)=>{
        fetch('http://localhost:3001/member/create' ,{
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
    }else if(this.state.mode === 'update'){
      _article = <UpdateContent></UpdateContent>
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
