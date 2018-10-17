import React, { Component } from 'react';
import logo from './logo.svg';
import MastHead from './components/MastHead';
import Day from './components/Calendar/Day';
import './App.css';
import Week from './components/Calendar/Week';
// date-fns
import getDate from 'date-fns/get_date'; 
import isSameWeek from 'date-fns/is_same_week';
import toWeeks from './helper/toWeeks';
import Days from './components/Calendar/Days';
import CalendarHeader from './components/Calendar/Header'; 
import Button from './components/Button';
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
        <MastHead title="October 2018"/>
        <div className="calendar">
          <CalendarHeader />
          <Days days={this.state.days}/>
        </div>
        <Button>Add Reminder</Button>
      </div>
    );
  }
}

export default App;
