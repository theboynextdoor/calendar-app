import React from 'react';
import format from 'date-fns/format';
import './style.css';

function Reminder(props) {
    return(
        <div 
            role="button" 
            className="reminder" 
            style={props.style} 
            key={props.reminder.id} 
            onClick={(e) => { props.onClick(e, props.reminder.id) } } 
            tabIndex="0"
            value={props.reminder.id}
        >
           <span className="reminder__title">{props.reminder.title}</span>
           <span className="reminder__time">{format(props.reminder.startTime, "h:mma")} - {format(props.reminder.endTime, "h:mma")}</span>
        </div>
    ); 
}

export default Reminder; 