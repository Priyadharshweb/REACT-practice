import React, { Component } from 'react'
import Task3 from './Task3'

export class Task2 extends Component {
  state={fname:"",lname:"",reg:"",dob:"",dept:"",sec:""}
 
    handleUpdate=(e)=>{
    this.setState({fname:e.target.value})
    }
   handleUp=(e)=>{
  this.setState({lname:e.target.value})
 }
        handle=(e)=>{
   this.setState({dob:e.target.value})
   }
           Reg=(e)=>{
  this.setState({reg:e.target.value})
  }
   Dept=(e)=>{
   this.setState({dept:e.target.value})
   }
   Sec=(e)=>{
    this.setState({sec:e.target.value})
    }

  render() {
    return (
      <div>
        <center>
            <h2>REGISTRATION FORM</h2>
            <table>
        <label>FirstName</label><br></br>
        <input onChange={this.handleUpdate}></input><br></br>
        <label>LastName</label><br></br>
        <input onChange={this.handleUp}></input><br></br>
        <label>DOB</label><br></br>
        <input onChange={this.handle}></input><br></br>
        <label>RegNo</label><br></br>
        <input onChange={this.Reg}></input><br></br>
        <label>Department</label><br></br>
        <input onChange={this.Dept}></input><br></br>
        <label>Section</label><br></br>
        <input onChange={this.Sec}></input><br></br>
        </table>
       <Task3 fname={this.state.fname}lname={this.state.lname}dob={this.state.dob}reg={this.state.reg}dept={this.state.dept}sec={this.state.sec}/>
        </center>

      </div>
    )
  }
}

export default Task2