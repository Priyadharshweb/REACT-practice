import React, { Component } from 'react'

export class Task1 extends Component {
    state={name:"User🙏"}
handleChange=()=>{
 this.setState({name:"Priya ❤️"})

}
  render() {
    return (
      <div>
        <center>
        <h1>Welcome {this.state.name} !!</h1>
      
        <button onClick={this.handleChange}>change</button>
        </center>
      </div>
    )
  }
}

export default Task1