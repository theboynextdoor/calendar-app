import React from "react";

import "./logo.css";

//https://www.gstatic.com/images/branding/product/1x/calendar_48dp.png"
export default function Logo({ src, text, alt}) {
    let titleElement = (text !== "") ? <h1 className="logo__text">{text}</h1> : null; 
    
    return (
        <div className="logo">
            <img className="logo__img" src={ src } alt={ alt || null} /> 
            {titleElement}
        </div>
    );
}