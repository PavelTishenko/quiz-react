//  You must add sweetalert library
import React, { Component } from 'react';
import Questions from './components/quiz-question';
import Resultpage from './components/result-page';
import './App.css';
import './components/questions.css';


class App extends Component {
   
  state={
     que: [],
     resultclass: 'hiden'
   }

  //  Get data from json file and set it in state
   componentWillMount(){
    fetch('/quiz.json')
    
    .then(res =>res.json())
    
    .then(data => this.setState({que: data}));  
   }
  // For visibility of parts of app
  changeRes = () =>{
    this.setState({resultclass: '' })
  }
  
  render() {
    return (
      <div  className = 'que-container'> 
        <Questions {...this.state} change = {this.changeRes} />
        <Resultpage {...this.state} />
      </div>
    );
  }
}

export default App;
