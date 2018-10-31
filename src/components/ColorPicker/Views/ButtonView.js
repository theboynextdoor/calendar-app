import React from "react";

export default function ButtonView({ color, onClick }) {
  const styles = {
    backgroundColor: color.hex
  }
  return (
    <button className="color-picker__btn btn btn--dropdown" value={color.hex} aria-label={color.name} onClick={onClick} style={{ marginLeft: "auto"}}>
      <span className="circle" style={styles}></span>
      <i className="fas fa-caret-down"></i>
    </button>
  );
}