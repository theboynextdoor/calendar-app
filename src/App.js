import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Day from './components/Calendar/Day';
import './App.css';
import Week from './components/Calendar/Week';
// date-fns
import getDate from 'date-fns/get_date'; 
import isSameWeek from 'date-fns/is_same_week';
import toWeeks from './helper/toWeeks';


// state
import initState from './initState';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = initState(new Date());
  }
  
  // needs to be refactor
  weeks() {
    let weeks = []; 
    let dates = Object.keys(this.state.days);
    let weekNo = 0;
    // add days into its appropriate week
    for (let current = 0; current < dates.length; current++) {
      let dayJSX = <Day day={ (getDate(dates[current])).toString() } reminders={this.state.days[dates[current]].reminders} key={dates[current]}/>; 
      if (current === 0) {
        weeks[weekNo] = [ dayJSX ]
      } else if(isSameWeek(dates[current - 1], dates[current])) {
        weeks[weekNo].push(dayJSX);
      } else {
        weeks[++weekNo] = [dayJSX];
      }
    }
    
    return weeks;
  }
  
  month() {
    let weeks = this.weeks();
    weeks = weeks.map((week, index) => (<Week key={`week-${index + 1}`}>{week}</Week>)); 
    // move first day 
    return (
      <div className="calendar">
        {weeks}
      </div>
    );
  }
  
  render() {
    return (
      <div className="container">
        <Header />
        {this.month()}
      </div>
    );
  }
}

export default App;
