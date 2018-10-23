import React from 'react';
import './index.css'; 

function Overlay(props) {
    let classNames = (props.classNames) ? props.classNames.join(' ') : ''; 
    
    return (
        <div className={'overlay ' + classNames}>
            {props.children}
        </div>
    );
}

export default Overlay; 