import React, { Component } from 'react';
import { connect } from "react-redux";

import Header from './Header';
import Day from './Day';
import Reminders from '../Reminder/Reminders';
import ReminderForm from '../ReminderForm/Container';

import Modal from "../Modal";
import Overlay from "../Overlay";

// Util
import getDate from 'date-fns/get_date';
import lastDayOfWeek from 'date-fns/last_day_of_week';
import isEqual from 'date-fns/is_equal';
import getDay from "date-fns/get_day";
import getISOWeek from "date-fns/get_iso_week";
import getYear from "date-fns/get_year";
import Weeks from "./Views/Weeks";

// TODO 
// 1. Reminder form doesn't close 
// 2. Remove form from view once clicking the "SAVE" button. 

class Calendar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isFormDisplayed: false
    }
    
    this.handleReminderClick = this.handleReminderClick.bind(this);
    this.getRemindersFromDay = this.getRemindersFromDay.bind(this);
    this.closeModal = this.closeModal.bind(this);
    
  }

  getReminder(id) {
    return this.props.reminders[id]; 
  }
  
  closeModal() {
    this.setState({
      isFormDisplayed: false
    });
  }

  handleReminderClick(event, id) {
    let reminder = this.getReminder(id); 
    
    this.setState({
      isFormDisplayed: true, 
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
      <Overlay classNames={["center-x-y"]}>
        <Modal onClick={this.closeModal}>
          <ReminderForm 
              type="edit"
              title={this.state.title}
              startTime={this.state.startTime}
              endTime={this.state.endTime}
              date={this.state.date}
              id={this.state.id}
              hasDeleteBtn={true}
              color={this.state.color}
          />
        </Modal>
      </Overlay>   
    ) 
  }
  
  render() {
    let { isFormDisplayed } = this.state; 
    let reminderForm = isFormDisplayed ? this.renderReminderForm() : null; 
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

function _styleDay(num) {
  return { 
    marginLeft: num * 14.2857143 + "%",
    borderLeft: "1px solid #e0e0e0"
  }
}

const mapStateToProps = state => {
  return {
    days: state.days, 
    reminders: state.reminders
  }
}

export default connect(mapStateToProps)(Calendar);