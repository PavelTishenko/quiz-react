import React, { Component } from 'react';
import './inputs.css';



export default class Inputs extends Component {
 
  state={
    forinput:[] 
  }

 // set to localStorage data from target with some conditions
  setToLocalBerl = (event)=>{
    const {que} = this.props;
    que.map(el=>{
      if(event.target.value === el.questions.answerforinput && el.questions.id === '1'){
        localStorage.setItem('Berlin', event.target.value);
        this.setState({forInput:[event.target.value]})
      }
      if(event.target.value !== 'Berlin'){
        localStorage.setItem('Berl', event.target.value)
      }
      return null;
    })
  };
  
  // set to localStorage data from target with some conditions
  setToLocalFinl = (event)=>{
    const {que} = this.props;
    que.map(el=>{
      if(event.target.value === el.questions.answerforinput && el.questions.id === '2'){
        localStorage.setItem('Finland', event.target.value);
        this.setState({forInput:[event.target.value]})
      }
      if(event.target.value !== 'Finland'){
        localStorage.setItem('Finl', event.target.value)
      }
      return null;
    })
  };
 

  render() {
    const placehol = 'Write your answer here';
    const InpEl1 = () => { return <input  onChange = {this.setToLocalBerl} type='text'  placeholder = {placehol} 
    defaultValue = { (localStorage.getItem('Berlin')) ? localStorage.getItem('Berlin') : localStorage.getItem('Berl') }/> }; //looking for value of input when user refresh page
    const InpEl2 = () => { return <input   onChange = {this.setToLocalFinl} type='text'  placeholder = {placehol} 
    defaultValue = { (localStorage.getItem('Finland')) ? localStorage.getItem('Finland') : localStorage.getItem('Finl')}/> };//looking for value of input when user refresh page
    return (
      <div className = 'inp-container'>
        <p>What is the capital of Germany ?</p>
        <InpEl1/>
        <p>Helsinki is the capital of which country ?</p>
        <InpEl2/>
      </div>
    )
  }
}
