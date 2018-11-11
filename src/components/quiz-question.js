import React, { Component } from 'react';
import Answerbtn from './answer-btn';
import Checkboxes from './chekboxes';
import Inputs from'./inputs';
import Radio from './radio';
import Select from './select';
import './questions.css';



export default class Questions extends Component {

  state={
    val:'',
    name:'',
    class: ''
  }

  // set in state target value if it the same with json data
  chengeFunc =(event)=>{
    const {que} = this.props;
    que.map( el => {
      if(event.target.value === el.questions.answer) {
        this.setState({val: event.target.value})
      };
      return null;
    })
  }

  // set in state target value if it the same with json data
  rightRadio = (event) =>{
    const {que}= this.props;
    que.map( el => {
      if(event.target.value === el.questions.rightanswer){
          this.setState({name:el.questions.rightanswer}) 
      }
      return null;
    }) 
  }
  
  // show and hide togle
  classAdd = () =>{
       this.setState({class: 'hiden' });
     }


  render() { 
    return (
      <div className = {this.state.class}> 
        <h1>Travel quiz</h1>
        <hr/>
        <Inputs {...this.props} {...this.state}/>
        <hr/>
        <Radio {...this.props} {...this.state}/>
        <hr/>
        <Checkboxes {...this.props} {...this.state}/> 
        <hr/>
        <Select {...this.props} {...this.state}/>
        <hr/>
        <Answerbtn {...this.props}  newClass = {this.classAdd} resultClass = {this.props.change}/>
      </div>
      
    );
  }
}
