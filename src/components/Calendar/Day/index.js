import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


function Day(props) {
    let reminders = props.reminders.map((reminder) => (
        <span>{reminder}</span>
    )); 
    return (
        <div className="calendar-day">
            <span>{props.day}</span>
            {reminders}
        </div>
    );
}


Day.propTypes = {
    day: PropTypes.string
};

export default Day; 