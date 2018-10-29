import React, { Component } from "react";
import { connect } from "react-redux";

// Components 
import ReminderForm from "./index";

// Utils
import format from "date-fns/format";
import addMinutes from "date-fns/add_minutes";
import uniqid from "uniqid";
import { to24hrFormat, isValidTime } from "../../helper/validateTime";

// Action creator
import { addReminder, deleteReminder, editReminder } from "../../actions/actions.js";

// TODO:
// 1. Round all time to the nearest half hour, unless user specifically change the value. 
// 2. endTime's time cannot be before startTime on the same date, e.g. date = Dec 10, 2018 endTime = 10:30am startTime = 11:30am
// 3. Validate if user is inputing correct time format, e.g. if user inputs 8:30zm indicate their is an error
// 4. Reformat user date input to the correct format, e.g. user inputs "December 31, 2018" => "Dec 31, 2018" :D 

class ReminderFormContainer extends Component {
  constructor(props) {
    super(props);
    
    let now = new Date(); 
    
    let title = this.props.title || ""; 
    let date = this.props.date || now; 
    let startTime = this.props.startTime || now;
    let endTime = this.props.endTime || addMinutes(now, 30);
    
    this.state = {
      title: title, 
      date: format(date, "MMM D, YYYY"),
      startTime: format(startTime, "h:mma"),
      endTime: format(endTime, "h:mma")  
    }
    
    this.handleAddReminder = this.handleAddReminder.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleEditReminder = this.handleEditReminder.bind(this);
  }
    
  handleFieldChange(state, e) {
    this.setState({
      [state]: e.target.value
    });
  }
  
  handleEditReminder(e) {
    // We need the id to change the form
    let { id } = this.props; 
    let { title, date, startTime, endTime } = this.state; 
    
    date = format(date, "YYYY-MM-DD"); 
    startTime = to24hrFormat(startTime);
    endTime = to24hrFormat(endTime);
    
    let payload = {
      id: id, 
      title: title,
      date: date, 
      startTime: format(`${date} ${startTime}`),
      endTime: format(`${date} ${endTime}`)
    };
    
    this.props.editReminder(payload);
    
    // Close modal window
  }
  
  handleAddReminder() {
    let { date, startTime, endTime, title } = this.state;
    
    date = format(date, "YYYY-MM-DD"); 
    startTime = to24hrFormat(startTime);
    endTime = to24hrFormat(endTime);
    
    var payload = {
      id: uniqid("r-"),
      title: title,
      date: date,
      startTime: format(`${date} ${startTime}`),
      endTime: format(`${date} ${endTime}`)
    };
    
    this.props.addReminder(payload);  
    
    this.setState({       
      title: "", 
      date: "",
      startTime: "",
      endTime: "" 
    });
    }
  
  render() {
    let { title, date, startTime, endTime } = this.state;
    let { type } = this.props; 
    
    return (
      <ReminderForm 
        dateValue={date}
        endTimeValue={endTime}
        startTimeValue={startTime}
        titleValue={title}
        onDateFieldChange={(e) => this.handleFieldChange("date", e)}
        onEndTimeFieldChange={(e) => this.handleFieldChange("endTime", e)}
        onStartTimeFieldChange={(e) => this.handleFieldChange("startTime", e)}
        onTitleFieldChange={(e) => this.handleFieldChange("title", e)}
        onButtonClick={ (type === "edit") ? this.handleEditReminder : this.handleAddReminder}
      />
    );  
  }
}

export default connect(
  null,
  { addReminder, deleteReminder, editReminder }
)(ReminderFormContainer);