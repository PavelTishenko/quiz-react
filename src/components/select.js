import React, { Component } from 'react';
import './select.css';
export default class Select extends Component {

  state = {
    city:localStorage.getItem('City')  // for props needed
  }

   // add to localStorage value to use it in select
  toLocal = (event) =>{
    localStorage.setItem('City', event.target.value);
  }

  render() {
    const {que} = this.props;
    const forSelect = que.map(el =>{
      if(el.questions.answerselect){
        return(
          <div key={el.questions.first}>
            <p>{el.questions.first}</p>
            <select onChange = {this.toLocal} defaultValue = { this.state.city}>
              <option  value={el.questions.answerselect[0]}>{el.questions.answerselect[0]}</option>
              <option  value={el.questions.answerselect[1]}>{el.questions.answerselect[1]}</option>
              <option  value={el.questions.answerselect[2]}>{el.questions.answerselect[2]}</option>
            </select>
          </div>
        )
      };
      return null;
    })
    return (
      <div className = 'sel-container'>
        {forSelect}
      </div>
    )
  }
}
