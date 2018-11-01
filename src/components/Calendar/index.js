import React, { Component } from 'react';
import { connect } from "react-redux";

import Header from './Header';
import Day from './Day';
import ReminderForm from '../ReminderForm/Container';

// Util
import Weeks from "./Views/Weeks";

// TODO 
// 1. Reminder form doesn't close 
// 2. Remove form from view once clicking the "SAVE" button. 

class Calendar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isFormOpen: false
    }
    
    this.closeModal = this.closeModal.bind(this);
    this.handleReminderClick = this.handleReminderClick.bind(this);
    this.getRemindersFromDay = this.getRemindersFromDay.bind(this);
  }
  
  closeModal(e) {
    this.setState({
      isFormOpen: false
    });
  }
  
  getReminder(id) {
    return this.props.reminders[id]; 
  }

  handleReminderClick(event, id) {
    let reminder = this.getReminder(id); 
    
    this.setState({
      isFormOpen: true,
      title: reminder.title,
      id: reminder.id, 
      startTime: reminder.startTime, 
      endTime: reminder.endTime,
      date: reminder.date,
      color: reminder.color
    });
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
        onModalClick={this.closeModal}
    />
    ) 
  }
  
  render() {
    let { isFormOpen } = this.state; 
    let reminderForm = isFormOpen ? this.renderReminderForm() : null; 
    let dates = Object.keys(this.props.days); 
    
    return (
      <div className="calendar">
        <Header />
        <Weeks 
          dates={dates} 
          onClick={this.handleReminderClick} 
          getReminders={this.getRemindersFromDay}
        />
        {reminderForm}
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