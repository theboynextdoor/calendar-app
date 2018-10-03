import React from 'react';
import './Day.css';


function Day(props) {
    return (
        <div className="calendar-day">
            <span>{props.day}</span>
        </div>
    );
}


export default Day; 