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
import Modal from './components/Modal'; 
import Overlay from './components/Overlay';
// state
import initState from './initState';

// CSS
import './util.css';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = { 
      calendar: initState(new Date()),
      isModalClose: true
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  
  closeModal() {
    this.setState({
      isModalClose: true
    }); 
  }
  
  openModal() {
    this.setState({
      isModalClose: false
    })
  }
  // <Days days={this.state.calendar.days}/>
  render() {
    var days = Object.keys(this.state.calendar.days);
    let { isModalClose } = this.state; 
    let modalElement = (
      <Overlay classNames={['center-x-y']}>
        <Modal onClick={this.closeModal}>
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
          <Button>SAVE</Button>
        </Modal>
      </Overlay>
      );
          
    let reminderModal = isModalClose ? null : modalElement; 
    
    return (
      <div className="container">
        <MastHead title={formatToMonthYear(days[0])} />
        <div className="calendar">
          <CalendarHeader />
          <Days days={this.state.calendar.days} />
        </div>
        {reminderModal}
        <Button classNames={["bg-red", "btn--round", "btn--float"]} onClick={this.openModal}>Add Reminder</Button>
      </div>
    );
  }
}

export default App;
