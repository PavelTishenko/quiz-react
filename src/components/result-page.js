import React, { Component } from 'react';
import './result-page.css';

export default class Resultpage extends Component {
  
  state={
    class: 'hiden',
    rightAnswers:['Berlin', ' Finland', ' Oslo', ' Dublin', ' Cork', ' Kyiv'],
  }
  
  // all right answers
  result = () => {
     sessionStorage.setItem('rightAnswer', this.state.rightAnswers);
   }

  //  counting right answers
  onCount=()=>{
    let count = 0;
    if(localStorage.getItem('Berlin')){
     count++;
    }
    if(localStorage.getItem('Finland')){
      count++;
    }
    if(localStorage.getItem('Oslo')){
      count++;
    }
    if(localStorage.getItem('Dublin') && localStorage.getItem('Cork') ){
      count++;
    }
    if(localStorage.getItem('City') === 'Kyiv'){
      count++;
    }
     return count;
   }

  //  func for back btn
   goBack = () =>{
    window.location.reload(); 
   }

  render() {
    const BackBtn = () =>{return <button className = 'back-btn' onClick={this.goBack}>Back</button>}
    return (
      <div className = {this.props.resultclass}>
        {this.result()} 
        <p className='your-res'>Your result: {this.onCount()}/5</p>
        <p className='answer'>Right answers:</p>
        {sessionStorage.getItem('rightAnswer')}
        <BackBtn/>
      </div> 
    )
  }
}
