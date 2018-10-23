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
    this.state = { 
      calendar: initState(new Date()),
      isModalClose: true,
      titleFieldVal: "", 
      dateFieldVal: "",
      startTimeFieldVal: "",
      endTimeFieldVal: ""
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
    console.log(this.state.input);
    this.props.addReminder(this.state.input);  
    this.setState({ input: "" });
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
            dateField={dateFieldVal}
            endTimeValue={endTimeFieldVal}
            startTimeValue={startTimeFieldVal}
            titleValue={titleFieldVal}
            onDateFieldChange={(e) => this.handleFieldChange("dateFieldVal", e)}
            onEndTimeFieldChange={(e) => this.handleFieldChange("endTimeFieldVal", e)}
            onStartTimeFieldChange={(e) => this.handleFieldChange("startTimeFieldVal", e)}
            onTitleFieldChange={(e) => this.handleFieldChange("titleFieldVal", e)}
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
