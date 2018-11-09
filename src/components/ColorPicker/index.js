import React from "react";
import OptionsView from "./Views/OptionsView";
import ButtonView from "./Views/ButtonView";

import "./style.css";

export default function ColorPicker({ color, colorOptions, onColorOptionClick, onColorButtonClick, isOptionsDisplayed }) { 
  if (isOptionsDisplayed) {
    return <OptionsView colorOptions={colorOptions} onClick={onColorOptionClick} />
  } else {
    return <ButtonView color={color} onClick={onColorButtonClick} />
  }
}
