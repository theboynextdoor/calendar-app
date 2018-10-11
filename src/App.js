import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Day from './components/Calendar/Day';
import './App.css';
import Week from './components/Calendar/Week';
// date-fns
import getDate from 'date-fns/get_date'; 
import isSameWeek from 'date-fns/is_same_week';

// state
import initState from './initState';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = initState(new Date());
  }
  
  setWeeks() {
    let weeks = []; 
    let dates = Object.keys(this.state.days);
    let previous = 0;
    let weekNo = 0;
    let dayJSX; 
    
    // add the first day in the first week
    weeks[weekNo] = [ <Day day={ (getDate(dates[previous])).toString() } /> ]; 
    
    // add days into its appropriate week
    for (let current = previous + 1; current < dates.length; current++) {
      dayJSX = <Day day={ (getDate(dates[current])).toString() } />; 
      
      if(isSameWeek(dates[previous++], dates[current])) {
        weeks[weekNo].push(dayJSX);
      } else {
        weeks[++weekNo] = [dayJSX];
      }
    }
    
    return weeks;
  }
  render() {
    console.log(this.setWeeks());
    var weeks = this.setWeeks(); 
    var monthJSX = []; 
    
    for (var i = 0; i < weeks.length; i++) {
      monthJSX.push(<Week>{weeks[i]}</Week>);
    }
    return (
      <div className="container">
        {monthJSX}
      </div>
    );
  }
}

export default App;
