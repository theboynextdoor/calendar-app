import React, { Component } from "react";
import { connect } from "react-redux";

// Components 
import ReminderForm from "./Views/FormView";

// Utils
import format from "date-fns/format";
import addMinutes from "date-fns/add_minutes";
import isValid from "date-fns/is_valid";
import isAfter from "date-fns/is_after";
import isBefore from "date-fns/is_before";
import addHours from "date-fns/add_hours";

import roundToNearestMinutes from "../../helper/roundToNearestMinutes";
import { to24hrFormat, isValidTime } from "../../helper/validateTime";
import uniqid from "uniqid";
// Action creator
import { addReminder, deleteReminder, editReminder } from "../../actions/actions.js";

// TODO:
// 1. Round all time to the nearest half hour, unless user specifically change the value. [x]
// 2. endTime's time cannot be before startTime on the same date, e.g. date = Dec 10, 2018 endTime = 10:30am startTime = 11:30am [x]
// 3. Validate if user is inputing correct time format, e.g. if user inputs 8:30zm indicate their is an error
// 4. Reformat user date input to the correct format, e.g. user inputs "December 31, 2018" => "Dec 31, 2018" :D 

// props(isFormOpen, title, date, startTime, endTime, type, id)
class ReminderFormContainer extends Component {
  constructor(props) {
    super(props);
    
    // this is a private variable for the current date 
    let now = roundToNearestMinutes(new Date(), 30); 
    
    let title = this.props.title || ""; 
    let date = this.props.date || now; 
    let startTime = this.props.startTime || now;
    let endTime = this.props.endTime || addHours(now, 1);
    
    this.state = {
      title: title, 
      date: format(date, "MMM D, YYYY"),
      startTime: format(startTime, "h:mma"),
      endTime: format(endTime, "h:mma"),
      isOptionsDisplayed: false,
      color: this.props.color || { hex: "#ff6347",  name: "Tomato"}, 
      type: this.props.edit || "edit",
      id: this.props.id || "",
      validationErrors: {
        date: false, 
        startTime: false, 
        endTime: false
      },
      showModal: this.props.showModal || false, 
      colorOptions: [
        { hex: "#ff6347", name: "Tomato"},
        { hex: "#fc8eac", name: "Flamingo"},
        { hex: "#f28500", name: "Tangerine"},
        { hex: "#8f9779", name: "Sage"},
      ]
    };
    
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
    this.handleColorButtonClick = this.handleColorButtonClick.bind(this);
    this.handleColorOptionClick = this.handleColorOptionClick.bind(this);
    this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
    
    this.handleDateBlur = this.handleDateBlur.bind(this);
    this.handleStartTimeBlur = this.handleStartTimeBlur.bind(this);
    this.handleEndTimeBlur = this.handleEndTimeBlur.bind(this);
    this.handleReminderButtonClick = this.handleReminderButtonClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
  }
  
  handleModalClick() {
    this.setState({
      showModal: false
    });  
  }
  
  handleReminderButtonClick() {
    this.setState({
      showModal: true
    });
  }
  
  handleStartTimeBlur() {
    let { startTime, validationErrors, date, endTime  } = this.state; 
    let isoSetTime = format(`${date} ${to24hrFormat(startTime)}`);
    let isoEndTime = format(`${date} ${to24hrFormat(endTime)}`);

    if (isValidTime(startTime) && isBefore(isoSetTime, isoEndTime)) {
      this.setState({
        startTime: startTime, 
        validationErrors: { ...validationErrors, startTime: false }
      });
    } else {
      this.setState({
        validationErrors: { ...validationErrors, startTime: true }
      });
    }

  }

  handleEndTimeBlur() {
    let { startTime, validationErrors, date, endTime  } = this.state; 
    let isoSetTime = format(`${date} ${to24hrFormat(startTime)}`);
    let isoEndTime = format(`${date} ${to24hrFormat(endTime)}`);

    if (isValidTime(endTime) && isAfter(isoEndTime, isoSetTime)) {
      this.setState({
        endTime: endTime, 
        validationErrors: { ...validationErrors, endTime: false }
      });
    } else {
      this.setState({
        validationErrors: { ...validationErrors, endTime: true }
      });
    }
  }
  
  handleDateBlur() {
    let { date, validationErrors } = this.state; 
    
    if (isValid(new Date(date))) {
      this.setState({ 
        date: format(date, "MMM D, YYYY"), 
        validationErrors: { ...validationErrors, date: false}
      });
    } else {
      this.setState({
        validationErrors: { ...validationErrors, date: true }
      })
    }
    
  }
  
  handleColorButtonClick(e) {
    this.setState({
      isOptionsDisplayed: true
    });
  }
  
  handleColorOptionClick(e) {
    this.setState({
      isOptionsDisplayed: false,
      color: this.state.colorOptions[e.target.value]
    });
  }
  
  handleDeleteButtonClick(e) {
    let { id } = this.props; 
    
    this.props.deleteReminder(id);
    
    // Clear fields
    this.setState({       
      title: "", 
      date: "",
      startTime: "",
      endTime: "",
    });
    
    // close modal
  }
  
  handleFieldChange(state, e) {
    this.setState({
      [state]: e.target.value
    });
  }
  
  handleSaveButtonClick(type, e) {
    let { date, startTime, endTime, title, color } = this.state;
    let hasError = this.hasError(); 
    
    date = format(date, "YYYY-MM-DD"); 
    startTime = to24hrFormat(startTime);
    endTime = to24hrFormat(endTime);
    
    let payload = {
      title: title,
      date: date,
      startTime: format(`${date} ${startTime}`),
      endTime: format(`${date} ${endTime}`),
      color: color
    }

    if (!hasError && title !== '') {
      
      if (type === "edit") {
        payload.id = this.props.id; 
        this.props.editReminder(payload);
      } else {
        payload.id = uniqid("r-");
        this.props.addReminder(payload);
      }
      
      this.setState({
        showModal: false
      });
    }
    
    // disable button 
    // close modal
  }
  
  hasError() {
    let { validationErrors } = this.state;
    
    for (let error in validationErrors) {
      if (validationErrors.hasOwnProperty(error) && validationErrors[error]  === true) {
        return true; 
      }
    }
    
    return false; 
  }
  
  render() {
    let { title, date, startTime, endTime, colorOptions, color, isOptionsDisplayed, validationErrors, showModal } = this.state;
    let { type } = this.props;
    
    let form = (
      <ReminderForm
        date={date}
        color={color}
        colorOptions={colorOptions}
        endTime={endTime}
        startTime={startTime}
        title={title}
        
        onColorButtonClick={this.handleColorButtonClick}
        onColorOptionClick={this.handleColorOptionClick}
        onDeleteButtonClick={this.handleDeleteButtonClick}
        onModalClick={this.handleModalClick}
        onSaveButtonClick={(e) => { this.handleSaveButtonClick(type, e) }}
        
        onDateChange={(e) => this.handleFieldChange("date", e)}
        onEndTimeChange={(e) => this.handleFieldChange("endTime", e)}
        onStartTimeChange={(e) => this.handleFieldChange("startTime", e)}
        onTitleChange={(e) => this.handleFieldChange("title", e)}
        
        onStartTimeBlur={this.handleStartTimeBlur}
        onEndTimeBlur={this.handleEndTimeBlur}
        onDateBlur={this.handleDateBlur}
        
        isOptionsDisplayed={isOptionsDisplayed}
        type={type}
        
        hasStartTimeError={validationErrors.startTime}
        hasEndTimeError={validationErrors.endTime}
        hasDateError={validationErrors.date}

        showModal={showModal}
      />
    );
      
    return (
      <React.Fragment>
        {form}
        <button className="btn bg-red btn--round btn--float" onClick={this.handleReminderButtonClick}>Add Reminder</button> 
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { addReminder, deleteReminder, editReminder }
)(ReminderFormContainer);