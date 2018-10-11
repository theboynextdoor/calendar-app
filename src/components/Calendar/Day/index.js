import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


function Day(props) {
    return (
        <div className="calendar-day">
            <span>{props.day}</span>
        </div>
    );
}


Day.propTypes = {
    day: PropTypes.string
};

export default Day; 