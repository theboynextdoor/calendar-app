import React from 'react';
import Day from './Day';
import './Month.css'

function Month(props) {
    var dayElement = props.days.map((day) => {
        return <Day day={day} />;
    });
    
    return (
        <div className="calendar">
            {dayElement}
        </div>
    );
}

export default Month; 