import React from "react";

function Dropdown(props) {
    return (
        <button className="btn btn--droped-down" onClick={props.onClick}>
            <span className="circle" style={{ backgroundColor: props.color }}></span>
            <i class="fas fa-caret-down"></i>
        </button>
    );
}

export default Dropdown;