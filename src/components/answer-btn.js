//  You must have sweetalert library
import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import './btn.css'

export default class Answerbtn extends Component {

  state={
    show: false,
    inputs1: localStorage.getItem('id'),
    inputs2: localStorage.getItem('id2'),
  }
  
  checkVal = () =>{ 
    if(!localStorage.getItem('Berlin')){
      this.setState({show: true});
    } 
    if(!localStorage.getItem('Finland')){
      this.setState({show: true});
    }
    if(!localStorage.getItem('Dublin') && !localStorage.getItem('Cork') && !localStorage.getItem('Finland')){
      this.setState({show: true});
    }
    if(localStorage.getItem('city') || !localStorage.getItem('city') ){
      this.setState({show: true});
    }else{this.props.resultClass()}
  }

  clear = () =>{
    localStorage.clear();   
    window.location.reload(); 
  };
   
  render() {
    return (
      <div > 
        <button  onClick = {this.checkVal} className = 'answer-btn'>Answer</button>
        <SweetAlert
        warning
        show = {this.state.show}
        title = "Are you sure ? No points are deducted for unanswered questions.You must fill out all the fields !"
        showCancel 
        cancelBtnText="No"
        confirmBtnText="Yes, continue !"
        onConfirm={() => {
          this.setState({ show: false });
          this.props.newClass();
          this.props.resultClass();
        }}
        onCancel={() => {
          this.setState({ show: false });
        }}
        />
       <button onClick = {this.clear} className = 'clear-btn'>Clear</button> 
      </div>
    )
  }
}
