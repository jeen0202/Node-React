
import './App.css';
import React from 'react';

import ReadContent from "./components/Readcontent";

class App extends React.Component {  

  render(){
  return (
    <div className="App">
      <p>Hello Node&React!!!</p>   
        <ReadContent></ReadContent>
    </div>
  );
}
}
export default App;
