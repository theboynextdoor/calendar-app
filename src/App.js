import React, { Component } from 'react';
import logo from './logo.svg';
import MastHead from './components/MastHead';
import Day from './components/Calendar/Day';
import './App.css';
import Week from './components/Calendar/Week';
import TimeField from './components/FormFields/TimeField';
import DateField from './components/FormFields/DateField';
import TitleField from './components/FormFields/TitleField';

// date-fns
import getDate from 'date-fns/get_date'; 
import isSameWeek from 'date-fns/is_same_week';

import formatToMonthYear from './helper/formatToMonthYear';

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
  // <Days days={this.state.days}/>
  render() {
    var days = Object.keys(this.state.days);
    
    return (
      <div className="container">
        <MastHead title={formatToMonthYear(days[0])} />
        <div className="calendar">
          <CalendarHeader />
          
        </div>
        <Button>Add Reminder</Button>
          <div className="card">
            <div className="btn--close"><i className="fas fa-times"></i></div>
            <TitleField placeholder="Add Title" />
            <div className="datetime-container">
              <div className="date-container">
                <DateField value="Sep 11, 2018" />
              </div>
              <div className="time-container">
                <TimeField value="11:30am" type="time" />
                <div className="seperator">&ndash;</div>
                <TimeField value="12:30pm" type="time" />
              </div>
            </div>
            <button className="o-btn">SAVE</button>
          </div>
      </div>
    );
  }
}

export default App;
