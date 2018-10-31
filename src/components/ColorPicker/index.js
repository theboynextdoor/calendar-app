import React from "react";
import "./style.css";
import OptionsView from './Views/OptionsView';
import ButtonView from './Views/ButtonView';

function ColorPicker({ color, colors, onOptionClick, onButtonClick, isOptionsDisplayed }) { 
  if (isOptionsDisplayed) {
    return <OptionsView colors={colors} onClick={onOptionClick} />
  } else {
    return <ButtonView color={color} onClick={onButtonClick} />
  }
}

export default ColorPicker; 