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
import Days from './components/Calendar/Days';

// state
import initState from './initState';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = initState(new Date());
  }
  
  month() {
    let dates = Object.keys(this.state.days);
    let days = dates.map((day) => {
      return (
        <Day
          key={day}
          day={(getDate(day)).toString()}
          reminders={[]}
        />
      );
    });
    
    return (
      <div className="calendar">
        {days}
      </div>
    );
  }
  
  render() {
    return (
      <div className="container">
        <Header />
        <div className="calendar-header">
          <div>
            <span>Sun</span>
          </div>
          <div>
            <span>Mon</span>
          </div>
          <div>
            <span>
              Tue
            </span>
          </div>
          <div>
            <span>
              Wed
            </span>
          </div>
          <div>
            <span>
              Thu
            </span>
          </div>
          <div>
            <span>
              Fri
            </span>
          </div>
          <div>
            <span>
              Sat
            </span>
          </div>
        </div>
        <Days days={this.state.days}/>
      </div>
    );
  }
}

export default App;
