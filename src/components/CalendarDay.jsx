import React from 'react';

function CalendarDay(props) {
    return (
        <div className="calendar-day">
            <span>{props.day}</span>
        </div>
    );
}


export default CalendarDay; 