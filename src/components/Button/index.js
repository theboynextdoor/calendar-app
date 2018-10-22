import React from 'react'; 
import './master.css';

function Button(props) {
    var classNames = (props.classNames) ? props.classNames.join(' ') : ''; 
    return (
        <button onClick={props.onClick} className={"btn " + classNames }>{props.children}</button>    
    );
}

export default Button;