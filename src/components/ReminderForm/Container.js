import React, { Component } from "react";
import { connect } from "react-redux";

// Components 
import Overlay from "../Overlay";
import Modal from "../Modal"
import ReminderForm from "./index";

// Utils
import format from "date-fns/format";
import addMinutes from "date-fns/add_minutes";
import uniqid from "uniqid";

import { addReminder } from "../../actions/actions.js";

class ReminderFormContainer extends Component {
    constructor(props) {
        super(props);
        let now = new Date(); 
        this.state = {
            titleFieldVal: "", 
            dateFieldVal: format(now, "MMM D, YYYY"),
            startTimeFieldVal: format(now, "h:mma"),
            endTimeFieldVal: format(addMinutes(now, 30), "h:mma")  
        }
    
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
    
    
    render() {
        let { titleFieldVal, dateFieldVal, startTimeFieldVal, endTimeFieldVal } = this.state;
        
        return (
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
        );
    }
}

export default connect(
    null,
    { addReminder }
)(ReminderFormContainer);