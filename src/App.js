import React, { Component } from "react";
import { connect } from "react-redux";

// Internal Components
import Calendar from "./components/Calendar"; 
import Button from "./components/Button";
import Modal from "./components/Modal"; 
import Overlay from "./components/Overlay";
import MastHead from "./components/MastHead";
import ReminderForm from "./components/ReminderForm/Container";

// Util Functions
import formatToMonthYear from "./helper/formatToMonthYear";

// CSS
import "./util.css";
import "./App.css";

// Images 
import "./logo.svg";

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = { 
      isModalOpen: false
    };
  
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  handleFieldChange(state, e) {
    this.setState({
      [state]: e.target.value
    });
  }
  
  openModal() {
    this.setState({
      isModalOpen: true
    })
  }
  
  closeModal() {
    this.setState({
      isModalOpen: false
    });

  }
    
  // <Days days={this.props.calendar.days}/>
  render() {
    var days = Object.keys(this.props.calendar.days);
    let { isModalOpen } = this.state;
    
    let modalElement = (
      <Overlay classNames={["center-x-y"]}>
        <Modal onClick={this.closeModal}>
          <ReminderForm />
        </Modal>
      </Overlay>
    );
    
          
    let reminderModal = isModalOpen ? modalElement : null; 
    
    return (
      <div className="container">
        <MastHead title={formatToMonthYear(days[0])} />
        <Calendar />
        {reminderModal}
        <Button classNames={["bg-red", "btn--round", "btn--float"]} onClick={this.openModal}>Add Reminder</Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    calendar: {
      days: state.days,
      reminders: state.reminders
    }
  }
}

export default connect(
  mapStateToProps, 
  {  }
)(App);
