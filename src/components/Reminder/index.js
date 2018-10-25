import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Reminder(props) {
    return(
        <p className="reminder" style={props.style} key={props.reminder.id}>
           <span className="reminder__title">{props.reminder.title}</span>
           <span className="reminder__time">{props.reminder.startTime} - {props.reminder.endTime}</span>
        </p>
    ); 
}

export default Reminder; 