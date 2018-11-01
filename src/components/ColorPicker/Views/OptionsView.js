import React from "react";

export default function OptionsView({ colorOptions, onClick }) {
  
  let co = colorOptions.map((color, index) => {
    return(
      <li
        key={color.name}
        className="color-picker__option" 
        role="button" 
        style={ { backgroundColor: color.hex }}
        aria-label={color.name}
        onClick={onClick}
        title={ color.name }
        value={ index }
      >
      </li>
    ); 
  });
  
  return (
    <ul className="color-picker__options">
      {co}
    </ul>
  );
}