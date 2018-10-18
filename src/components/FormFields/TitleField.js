import React from 'react';

function TitleField(props) {
    return (
        <input type="text" placeholder={props.placeholder} className="input-field input-field--title"/>    
    ); 
}

export default TitleField;