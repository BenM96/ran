import React, { Component } from 'react';
//import Dan from './Dan.js';
import StateExercise from './StateExersise.js'
//import Ran from './Ran.js'
// import TextInput from './TextInput.js';
// import AddButton from './AddButton.js';


class App extends Component {
  state={
    text:"",
    array:[],
    id:1
  }
  
  render() {
      return (
        <div>
          <input type="text" onChange={this.textChange}></input>
          <button onClick={this.clicked}>add</button>
          {this.state.array.map((item,index) => <p key={index}>{item}</p>)} 
        </div>
      );
  }



  textChange = (e) => {
    this.setState({
        text:e.target.value
    });
  }

  clicked = (e) =>{
    let array=this.state.array
    array.push(this.state.text);
    this.setState({
      array:array,
      id:this.state.id++,      
    });
    console.log(this.state.array);   
       
  }
}
export default App;