import React, { Component } from "react";
import { connect } from "react-redux";

// Components 
import ReminderForm from "./Views/FormView";

// Utils
import format from "date-fns/format";
import isValid from "date-fns/is_valid";
import isAfter from "date-fns/is_after";
import isBefore from "date-fns/is_before";
import addHours from "date-fns/add_hours";

import roundToNearestMinutes from "../../helper/roundToNearestMinutes";
import hasError from "../../helper/hasError";
import { to24hrFormat, isValidTime } from "../../helper/validateTime";
import withinCharLimit from "../../helper/withinCharLimit";
import uniqid from "uniqid";
// Action creator
import { addReminder, deleteReminder, editReminder, closeReminderForm, openReminderForm } from "../../actions/actions.js";

// TODO:
// 1. Round all time to the nearest half hour, unless user specifically change the value. [x]
// 2. endTime"s time cannot be before startTime on the same date, e.g. date = Dec 10, 2018 endTime = 10:30am startTime = 11:30am [x]
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
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleTitleBlur = this.handleTitleBlur.bind(this);
  }
  
  handleModalClick() {
    this.props.closeReminderForm();
  }
  
  handleTitleBlur() {
    let { title, validationErrors } = this.state; 
    let minLimit = 1; 
    let maxLimit = 30; 
    
    if (withinCharLimit(title, maxLimit, minLimit)) {
      this.setState({
        title: title, 
        validationErrors: { ...validationErrors, title: false}
      })
    } else {
      this.setState({
        validationErrors: {...validationErrors, title: true }
      })
    } 
    
  }
  handleStartTimeBlur() {
    let { startTime, validationErrors, date, endTime  } = this.state; 
    let isoSetTime = format(`${date} ${to24hrFormat(startTime)}`);
    let isoEndTime = format(`${date} ${to24hrFormat(endTime)}`);

    if (isValidTime(startTime)) {
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

    if (isValidTime(endTime)) {
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
    this.props.closeReminderForm();
  }
  
  handleFieldChange(state, e) {
    this.setState({
      [state]: e.target.value
    });
  }
  
  handleSaveButtonClick(type, e) {
    let { date, startTime, endTime, title, color, validationErrors } = this.state;
    
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

    if (!hasError(validationErrors) && title !== "") {
      if (type === "edit") {
        payload.id = this.props.id; 
        this.props.editReminder(payload);
      } else {
        payload.id = uniqid("r-");
        this.props.addReminder(payload);
      }
      
      this.props.closeReminderForm();
    }
  }
  
  render() {
    let { title, date, startTime, endTime, colorOptions, color, isOptionsDisplayed, validationErrors } = this.state;
    let { type, showReminderForm } = this.props;
    
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
        onTitleBlur={this.handleTitleBlur}
        
        isOptionsDisplayed={isOptionsDisplayed}
        type={type}
        
        hasStartTimeError={validationErrors.startTime}
        hasEndTimeError={validationErrors.endTime}
        hasDateError={validationErrors.date}
        hasTitleError={validationErrors.title}
        
        showModal={showReminderForm}
      />
    );
      
    return (
      <React.Fragment>
        {form}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    showReminderForm: state.showReminderForm
  }
}
export default connect(
  mapStateToProps,
  { addReminder, deleteReminder, editReminder, closeReminderForm, openReminderForm }
)(ReminderFormContainer);