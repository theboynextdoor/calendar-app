import React from "react";
import PropTypes from "prop-types";

import "./index.css";

function ReminderForm(props) {
    let deleteButton = (props.hasDeleteBtn) ? 
                       <button className="btn btn--mute m-r-1" onClick={props.onDeleteButtonClick}>DELETE</button> : 
                       null;

    return (
        <div className="reminder-form">
            <input 
                type="text" 
                className="input-field input-field--title"
                onChange={props.onTitleFieldChange}
                value={props.titleValue}
                aria-label="Enter reminder's title here"
                required
                placeholder="Add Title"
            />
            <div className="row row--center-x m-t-1 bg-gray">
                <input 
                    type="text"
                    className="input-field input-field--date w-50"
                    arial-label="Enter reminder's date here"
                    onChange={props.onDateFieldChange}
                    value={props.dateValue}
                    required
                />
                <div className="row row--center-x w-50">
                    <input 
                        type="text"
                        className="input-field input-field--time"
                        aria-label="Enter reminder's start time"
                        onChange={props.onStartTimeFieldChange}
                        value={props.startTimeValue}
                        required
                    />
                    <div className="seperator">&ndash;</div>
                    <input 
                        type="text"
                        className="input-field input-field--time"
                        aria-label="Enter reminder's end time"
                        onChange={props.onEndTimeFieldChange}
                        value={props.endTimeValue}
                        required
                    />
                </div>
            </div>
            <div className="btns m-t-1">
                <button className="btn" onClick={props.onButtonClick}>SAVE</button>
                {deleteButton}
            </div>
        </div>
    ); 
}

ReminderForm.defaultProps = {
    hasDeleteBtn: false
}
export default ReminderForm;