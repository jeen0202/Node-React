
import React from 'react';

import ReadContent from "./components/Readcontent";
import CreateContent from "./components/Createcontent";
import UpdateContent from "./components/UpdateContent";

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
      _article = <ReadContent onUpdate= {(_id)=>{
        fetch('member/update' ,{
          method : "POST",
          headers: {
            'Content-Type': 'application/json',
            },        
          body : JSON.stringify({
          'id' : _id
          })
        }) 
        .then(res=>res.json())
        .then(data=>this.setState({
          seletedMember:data,
          mode:'update'}))     
      }} onDelete = {(_id)=>{
        if(window.confirm('really?')){
          fetch('member/delete' ,{
            method : "POST",
            headers: {
              'Content-Type': 'application/json',
              },        
            body : JSON.stringify({
              'id' : _id
            })     
          })
          .then(response =>{
            this.setState({mode:'default'})
          })
        }
      }}></ReadContent> 
    }else if(this.state.mode === "create"){
      _article = <CreateContent onCreate = {(_username,_dept)=>{
        fetch('member/create' ,{
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
      console.log(`App SelectedMember : ${this.state.seletedMember}`)
      _article = <UpdateContent selectedMember={this.state.seletedMember}></UpdateContent>
    }
    
    return _article;
  }
  render(){
    console.log('App render')
  return (
    <div className="App">
      {this.getContent()}
    </div>
  );
}
}
export default App;
