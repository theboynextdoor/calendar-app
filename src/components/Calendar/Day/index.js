import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


function Day(props) {
    return (
        <div className="calendar-day" style={props.style}>
            <span>{props.day}</span>
            {props.children}
        </div>
    );
}


Day.propTypes = {
    day: PropTypes.string
};

Day.defaultProps = {
    style: {},
    reminder: {}
};

export default Day; 