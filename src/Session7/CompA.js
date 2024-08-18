import React, { Component } from 'react'
import CompB from './CompB'

export class CompA extends Component {
    state={num:0,data:""}
    handleChange=()=>
    {
       this.setState({num:this.state.num+1})//update
    }
    handleUpdate=(e)=>{
       this.setState({data:e.target.value})
    }
  render() {
    return (
      <div>
        <button onClick={this.handleChange}>Click</button> 
        <input onChange={this.handleUpdate}></input>
        <CompB name={this.state.num}value={this.state.data}/> 
      </div>
    )
  }
}

export default CompA