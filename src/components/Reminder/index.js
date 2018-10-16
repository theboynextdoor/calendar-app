import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Reminder(props) {
    return(
        <p className="reminder" style={props.style}>
           <span className="reminder__time">{props.reminder.time}</span>
           <span className="reminder__title">{props.reminder.title}</span>
        </p>
    ); 
}

export default Reminder; 