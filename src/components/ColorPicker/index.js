import React from "react";
import "./style.css";

function ColorPicker(props) {
    let colors = props.colors.map((color) => {
       return (
        <li 
            key={color.name}
            className="color-picker__item" 
            role="button" 
            style={ { backgroundColor: color.hex }}
            aria-label={color.name}
            onClick={props.onClick}
            title={ color.name }
        >
        </li> 
       );  
    });
    
    return(
        <ul className="color-picker">
            {colors}
        </ul>
    );
}

export default ColorPicker; 