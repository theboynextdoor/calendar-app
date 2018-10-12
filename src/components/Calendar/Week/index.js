import React from 'react';
import Day from '../Day';
import './style.css';


function Week(props) {
    return (
        <div className='calendar-week'>
            {props.children}
        </div>
    );
}



export default Week; 