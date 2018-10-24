import React, { Component } from "react";
import { connect } from "react-redux";

// Internal Components
import Days from "./components/Calendar/Days";
import CalendarHeader from "./components/Calendar/Header"; 
import Button from "./components/Button";
import Modal from "./components/Modal"; 
import Overlay from "./components/Overlay";
import MastHead from "./components/MastHead";
import ReminderForm from "./components/ReminderForm";

// Util Functions
import getDate from "date-fns/get_date"; 
import isSameWeek from "date-fns/is_same_week";
import formatToMonthYear from "./helper/formatToMonthYear";
import uniqid from "uniqid";
import format from "date-fns/format";
import addMinutes from "date-fns/add_minutes";

// state
import initState from "./initState";

// Actions
import { addReminder, editReminder, deleteReminder } from './actions/actions.js';

// CSS
import "./util.css";
import "./App.css";

// Images 
import logo from "./logo.svg";

class App extends Component { 
  constructor(props) {
    super(props);
    let now = new Date(); 
    this.state = { 
      calendar: initState(new Date()),
      isModalClose: true,
      titleFieldVal: "", 
      dateFieldVal: format(now, "MMM D, YYYY"),
      startTimeFieldVal: format(now, "h:mma"),
      endTimeFieldVal: format(addMinutes(now, 30), "h:mma")
    };
    
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleAddReminder = this.handleAddReminder.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }
  
  handleFieldChange(state, e) {
    this.setState({
      [state]: e.target.value
    });
  }
  
  handleAddReminder() {
    let { dateFieldVal, startTimeFieldVal, endTimeFieldVal, titleFieldVal } = this.state;
    
    let date = format(dateFieldVal, "YYYY-MM-DD"); 
 
    var payload = {
      id: uniqid("r-"),
      title: titleFieldVal,
      date: date,
      startTime: startTimeFieldVal,
      endTime: endTimeFieldVal
    };
    
    this.props.addReminder(payload);  
    
    this.setState({       
      titleFieldVal: "", 
      dateFieldVal: "",
      startTimeFieldVal: "",
      endTimeFieldVal: "" 
    });
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
    let { titleFieldVal, dateFieldVal, startTimeFieldVal, endTimeFieldVal, isModalClose } = this.state;
    
    let modalElement = (
      <Overlay classNames={["center-x-y"]}>
        <Modal onClick={this.closeModal}>
          <ReminderForm 
            dateValue={dateFieldVal}
            endTimeValue={endTimeFieldVal}
            startTimeValue={startTimeFieldVal}
            titleValue={titleFieldVal}
            onDateFieldChange={(e) => this.handleFieldChange("dateFieldVal", e)}
            onEndTimeFieldChange={(e) => this.handleFieldChange("endTimeFieldVal", e)}
            onStartTimeFieldChange={(e) => this.handleFieldChange("startTimeFieldVal", e)}
            onTitleFieldChange={(e) => this.handleFieldChange("titleFieldVal", e)}
            onButtonClick={this.handleAddReminder}
          />
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

export default connect(
  null, 
  { addReminder }
)(App);
