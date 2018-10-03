import React, { Component } from 'react';
import logo from './logo.svg';
import Month from './components/Calendar/Month';
import Day from './components/Calendar/Day';
import './App.css';

class App extends Component {
  
  render() {
    var days = [];
    for (var i = 1; i < 30; i++) {
      days.push(i);
    }
    
    return (
      <div className="container">
        <Month days={days} />
      </div>
    );
  }
}

export default App;
