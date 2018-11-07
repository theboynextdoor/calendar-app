import React, { Component } from "react";
import { connect } from "react-redux";
import ReminderForm from "../ReminderForm/Container";

// Components
import MastHead from "../MastHead";
import Header from "./Views/Header";
import Weeks from "./Views/Weeks";

import format from "date-fns/format";

import { openReminderForm } from "../../actions/actions.js";

// TODO 
// 1. Reminder form doesn't display
// 2. Remove form from view once clicking the "SAVE" button. 

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "", 
      startTime: "", 
      endTime: "",
      date: "",
      id: "",
      color: "",
      showModal: false,
      type: "add"
    }
    
    this.handleReminderClick = this.handleReminderClick.bind(this);
    this.getRemindersFromDay = this.getRemindersFromDay.bind(this);
    this.handleReminderButtonClick = this.handleReminderButtonClick.bind(this);

  }
  
  /** Handlers **/
  
  handleReminderButtonClick() {
    this.setState({
      title: "", 
      id: "", 
      startTime: "",
      endTime: "", 
      date: "", 
      color: "",
      type: "add"
    });
    
    this.props.openReminderForm();
  }
  
  handleReminderClick(event, id) {
    let reminder = this.getReminder(id); 
    
    this.setState({
      title: reminder.title,
      id: reminder.id, 
      startTime: reminder.startTime, 
      endTime: reminder.endTime,
      date: reminder.date,
      color: reminder.color,
      type: "edit"
    });
    
    this.props.openReminderForm(); 
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
        <ReminderForm 
          type={this.state.type}
          title={this.state.title}
          startTime={this.state.startTime}
          endTime={this.state.endTime}
          date={this.state.date}
          id={this.state.id}
          color={this.state.color}
        />
        <button className="btn bg-red btn--round btn--float" onClick={this.handleReminderButtonClick}>Add Reminder</button> 
      </div>
      </div>
    ); 
  }
}

const mapStateToProps = state => {
  return {
    days: state.days, 
    reminders: state.reminders,
    showReminder: state.showReminder
  }
}

export default connect(mapStateToProps, {openReminderForm})(Calendar);