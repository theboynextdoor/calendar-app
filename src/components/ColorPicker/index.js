import React from "react";
import "./style.css";

function ColorPicker(props) {
    
    // When clicking one of these options 
    let colorOptions = props.colors.map((color, index) => {
        return (
            <li
                key={color.name}
                className="color-picker__option" 
                role="button" 
                style={ { backgroundColor: color.hex }}
                aria-label={color.name}
                onClick={props.onOptionClick}
                title={ color.name }
                value={ index }
            > 
            </li>
        ); 
    });
    
    // it will change this value 
    let colorPickerButton = (
        <button className="color-picker__btn btn btn--dropdown" value={props} aria-label={props.color.name} onClick={props.onButtonClick} style={{ marginLeft: "auto"}}>
            <span className="circle" style={{ backgroundColor: props.color.hex}}></span>
            <i className="fas fa-caret-down"></i>
        </button>
    );
    
    return (
        <React.Fragment>
            { props.isOptionsDisplayed ? (<ul className="color-picker">{colorOptions}</ul>) : colorPickerButton }
        </React.Fragment>
    );
}

export default ColorPicker; 