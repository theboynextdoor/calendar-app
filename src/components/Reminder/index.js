import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import './style.css';

function Reminder(props) {
    return(
        <a className="reminder" style={props.style} key={props.reminder.id} onClick={props.onClick}>
           <span className="reminder__title">{props.reminder.title}</span>
           <span className="reminder__time">{format(props.reminder.startTime, "h:mma")} - {format(props.reminder.endTime, "h:mma")}</span>
        </a>
    ); 
}

export default Reminder; 