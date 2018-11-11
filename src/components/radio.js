import React, { Component } from 'react'
import './radio.css';

export default class Radio extends Component {
  
  state={
    Oslo: localStorage.getItem('Oslo'),
    Bergen: localStorage.getItem('Bergen'),
    Alesund:localStorage.getItem('Alesund')
  }
  
  // set in localStorage target value for using in state and default value of checked
  toLocal = (event)=>{
    if(event.target.value === 'Oslo'){
      localStorage.setItem('Oslo', 'Oslo');
      localStorage.removeItem('Alesund');
      localStorage.removeItem('Bergen');
    }
       
    if(event.target.value === 'Bergen'){
      localStorage.setItem('Bergen', 'Bergen');
      localStorage.removeItem('Oslo');
      localStorage.removeItem('Alesund');
    }
    if(event.target.value === 'Alesund'){
      localStorage.setItem('Alesund', 'Alesund');
      localStorage.removeItem('Oslo');
      localStorage.removeItem('Bergen');
    }
    
  return null;
  }
    
  render() {
    const {Oslo, Bergen, Alesund} = this.state; // distr-ion of state el
    const {que} = this.props; // data from json
    const forRadio = que.map(el => {
      if(el.questions.answer){
        return (
          <div  key = {el.questions.first} className = 'radio-container'>
            <p>{el.questions.first} </p>
            <input defaultChecked = {Oslo}
            value = {el.questions.answer[0]} 
            name ='radio' key = {el.questions.answer[0]} 
            type = 'radio'/>{el.questions.answer[0]}
            <input defaultChecked = {Bergen}
            value = {el.questions.answer[1]} 
            key = {el.questions.answer[1]} 
            name ='radio'  type = 'radio'/>{el.questions.answer[1]}
            <input defaultChecked = {Alesund}
            value ={el.questions.answer[2]} 
            key = {el.questions.answer[2]} 
            name ='radio' 
            type = 'radio'/>{el.questions.answer[2]}
          </div>
        )
      }
      return null;
    })
    return (
      <div onClick = {this.toLocal} >
        {forRadio}
      </div>
    )
  }
}
