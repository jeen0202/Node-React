
import React from 'react';

import ReadContent from "./components/Readcontent";
import CreateContent from "./components/Createcontent";
import UpdateContent from "./components/UpdateContent";
import Control from './components/Control';
import LoginContent from './components/LoginContent';
import RegisterContent from "./components/RegisterContent";

class App extends React.Component {  
  constructor(props){ 
    super(props);
    this.state = {
      mode:'default',
      is_login :false      
    }
  }
  getContent(){
    var _article,_readContent, title= null;
    if(this.state.mode === "default"){
      if(this.state.is_login){
        _readContent = <ReadContent onUpdate= {(_id)=>{
          fetch('server/member/update' ,{
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
            fetch('server/member/delete' ,{
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
        title = <h2 className = "loginTitle">Hello {this.state.nickname}!!</h2>;
      }else{
        title = <h2 className = "mainTitle">Human Resource Management Program</h2>
      }
      _article =      
      <p className="listContainer">
      {title}      
      {_readContent}
      <Control is_login = {this.state.is_login} nickname = {this.state.nickname} onChangeMode ={(_mode)=>{
        this.setState({mode:_mode})
      }} onLogout = {()=>{
        this.setState({is_login:false})
      }}></Control> 
      </p>
            
      
      
    }else if(this.state.mode === "create"){
      _article = <CreateContent onCreate = {(_username,_dept)=>{
        fetch('server/member/create' ,{
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
      _article = <UpdateContent selectedMember={this.state.seletedMember} onUpdate ={(_member)=>{
        console.log(`App update => ${_member}`)
        fetch('server/member/update_process',{
          method : "POST",
          headers: {
            'Content-Type': 'application/json',            
          },
          body : JSON.stringify(_member)
        })
        .then(response => {
          this.setState({mode:'default'})
        })
      }}></UpdateContent>
    }else if(this.state.mode === 'login'){
      _article = <LoginContent onLogin ={(_user)=>{
        console.log(`id : ${_user.id} password : ${_user.pass}`);
        fetch('server/auth/login_process',{
          method : "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept' : 'applcation/json'            
          },
          body : JSON.stringify(_user)
        })
        .then(res => res.json())
        .then(data=>this.setState({
          mode:'default',
          is_login:data.is_Login,
          nickname:data.nickname}))
      }} onForgot ={()=>{
        this.setState({mode :"register"})
      }}></LoginContent>
    }else if(this.state.mode === "register"){
      _article = <RegisterContent onRegister = {(_user)=>{
        console.log(`RegisterContent => ${_user.id} ${_user.pass} ${_user.nickname}`)
        fetch('server/auth/register_process',{
          method : "POST",
          headers: {
            'Content-Type': 'application/json',            
          },
          body : JSON.stringify(_user)
        }).then(response=>{
          this.setState({mode:'default'})
          })
      }}></RegisterContent>
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
