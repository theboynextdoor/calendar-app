import React from 'react';
import PropTypes from 'prop-types';
import '../master.css';


function Day(props) {
    return (
        <div className="calendar__day" style={props.style}>
            <span className="calendar__label">{props.day}</span>
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