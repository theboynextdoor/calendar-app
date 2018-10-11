import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
    return (
        <div className="calendar-day">
            <span>{props.day}</span>
        </div>
    );
}
