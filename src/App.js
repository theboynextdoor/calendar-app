import React, { Component } from "react";
import { connect } from "react-redux";

// Internal Components
import Calendar from "./components/Calendar"; 
import Button from "./components/Button";
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
      isFormOpen: false
    };
  
    this.closeForm = this.closeForm.bind(this);
    this.openForm = this.openForm.bind(this);
  }
  
  closeForm() {
    this.setState({
      isFormOpen: false
    });
  }
  openForm() {
    this.setState({
      isFormOpen: true
    })
  }
  //  <Button classNames={["bg-red", "btn--round", "btn--float"]} onClick={this.openForm}>Add Reminder</Button>

  // <Days days={this.props.calendar.days}/>
  render() {
    var days = Object.keys(this.props.calendar.days);
    let { isFormOpen } = this.state;
  
    return (
      <div className="container">
        <div className="container">
          <MastHead title={formatToMonthYear(days[0])} />
          <Calendar />
          <ReminderForm />
        </div>
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
