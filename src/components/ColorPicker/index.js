import React from "react";
import "./style.css";
import OptionsView from './Views/OptionsView';
import ButtonView from './Views/ButtonView';

function ColorPicker({ color, colorOptions, onColorOptionClick, onColorButtonClick, isOptionsDisplayed }) { 
  if (isOptionsDisplayed) {
    return <OptionsView colorOptions={colorOptions} onClick={onColorOptionClick} />
  } else {
    return <ButtonView color={color} onClick={onColorButtonClick} />
  }
}

export default ColorPicker; 