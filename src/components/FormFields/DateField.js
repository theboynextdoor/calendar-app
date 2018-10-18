import React from 'react';
import './master.css'; 

// stores specific information 
// about a type 

function DateField(props) {
    return (
        <input value={props.value} className="input-field input-field--date" required />
    );
}

export default DateField; 