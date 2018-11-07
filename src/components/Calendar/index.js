import React, { Component } from "react";
import { connect } from "react-redux";
import ReminderForm from "../ReminderForm/Container";

// Components
import MastHead from "../MastHead";
import Header from "./Views/Header";
import Weeks from "./Views/Weeks";

import format from "date-fns/format";

// TODO 
// 1. Reminder form doesn't display
// 2. Remove form from view once clicking the "SAVE" button. 

class Calendar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showModal: false
    }
    
    this.handleReminderClick = this.handleReminderClick.bind(this);
    this.getRemindersFromDay = this.getRemindersFromDay.bind(this);
  }
  
  /** Handlers **/
  
  handleReminderClick(event, id) {
    let reminder = this.getReminder(id); 
    
    this.setState({
      title: reminder.title,
      id: reminder.id, 
      startTime: reminder.startTime, 
      endTime: reminder.endTime,
      date: reminder.date,
      color: reminder.color
    });
  }
  
  /** Getters **/
  getReminder(id) {
    return this.props.reminders[id]; 
  }
  
  getRemindersFromDay(dayId) {
    let day = this.props.days[dayId]; 
    
    if (!day) {
      return null; 
    }
    
    let reminders = this.props.reminders; 
    
    return day.reminders.map((reminder) => {
      return reminders[reminder];
    });
  }
  
  renderReminderForm() {
   return (
    <ReminderForm 
      type="edit"
      title={this.state.title}
      startTime={this.state.startTime}
      endTime={this.state.endTime}
      date={this.state.date}
      id={this.state.id}
      color={this.state.color}
      showModal={this.showModal}
    />
    ) 
  }
  
  render() {
    let dates = Object.keys(this.props.days); 
    
    return (
      <div className="container">
      <MastHead title={format(dates[0], "MMMM GGGG")} />
      <div className="calendar">
        <Header />
        <Weeks 
          dates={dates} 
          onClick={this.handleReminderClick} 
          getReminders={this.getRemindersFromDay}
        />
        <ReminderForm />
      </div>
      </div>
    ); 
  }
}

const mapStateToProps = state => {
  return {
    days: state.days, 
    reminders: state.reminders
  }
}

export default connect(mapStateToProps)(Calendar);