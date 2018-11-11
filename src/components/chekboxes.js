import React, { Component } from 'react'
import './checkboxes.css';
export default class Chekboxes extends Component {

toLocal = (event)=>{
  if(event.target.value === 'Dublin'){
    if(localStorage.getItem('Dublin')){
      localStorage.removeItem('Dublin');
    }else{localStorage.setItem('Dublin', 'Dublin');}
  }
  if(event.target.value === 'Cork'){
    if(localStorage.getItem('Cork')){
      localStorage.removeItem('Cork');
    }else{localStorage.setItem('Cork', 'Cork');}
  }
  if(event.target.value === 'Kharkiv'){
    if(localStorage.getItem('Kharkiv')){
      localStorage.removeItem('Kharkiv');
    }else{localStorage.setItem('Kharkiv', 'Kharkiv');}
    
  }
  return null;
}
 
  render() {
    const {que} = this.props;
    const forCheckbxs = que.map( el => {
      if(el.questions.answercheckbox){
        return (
          <div key = {el.questions.answercheckbox} className = 'check-container'>
            <p>{el.questions.first}</p>
            <input defaultChecked ={(localStorage.getItem('Dublin')) ? 'Dublin': ''} 
            type = 'checkbox' value = {el.questions.answercheckbox[0]}/>{el.questions.answercheckbox[0]}
            <input defaultChecked = {(localStorage.getItem('Cork')) ? 'Cork': ''}
             type = 'checkbox' value = {el.questions.answercheckbox[1]}/>{el.questions.answercheckbox[1]}
            <input defaultChecked = {(localStorage.getItem('Kharkiv')) ? 'Kharkiv': ''} 
            type = 'checkbox' value = {el.questions.answercheckbox[2]}/>{el.questions.answercheckbox[2]} {/* use checkbox where gona be several right answers*/}
          </div>
        ) 
      }
      return null;
    })
    return (
      <div onClick = {this.toLocal}>
        {forCheckbxs}
      </div>
    )
  }
}
