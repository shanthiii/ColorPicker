import React from "react";
import { render } from "react-dom";

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
  }
  //HandleRed function updates the value of red when it is changed by slider 
  handleRed = (event) => {
    this.setState({
      red: event.target.value,
    })
  }
  //HandleGreen function updates the value of red when it is changed by slider 
  handleGreen = (event) => {
    this.setState({
      green: event.target.value
    })
  }
  //HandleBlue function updates the value of red when it is changed by slider 
  handleBlue = (event) => {
    this.setState({
      blue: event.target.value
    })
  }
  //This is a render function
  render(){
    return(
      <div 
      style={{
          backgroundColor: 
          "rgb("+
          this.state.red+","+
          this.state.green+","+
          this.state.blue+")",
          height: "100vh"
      }}
      >
        <div 
          style={{
            backgroundColor: "white",
            padding: 20,
            width: 200,
            borderRadius: 10
          }}
        >
        
          <h1>Color Picker</h1>
          red: <input type="range" value={this.state.red} onChange={this.handleRed}/><br/>
          green: <input type="range" value={this.state.green} onChange={this.handleGreen}/><br/>
          blue: <input type="range" value={this.state.blue} onChange={this.handleBlue} /><br/>
        
        </div>
      </div>
      
    )
  }
}
