import React from "react";
import Logo from "./Views/Logo";
import Title from "./Views/Title";
import "./style.css";

export default function MastHead(props) {
  return (
    <header className="masthead"> 
      <Logo src="https://www.gstatic.com/images/branding/product/1x/calendar_48dp.png" text="Calendar" />
      <div className="flex row--center-y m-l-auto">
        <Title title={props.title} />
        <div className="action-items">
          <button onClick={props.onPrevButtonClick} className="btn--prev" title="Previous month"><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
          <button onClick={props.onNextButtonClick} className="btn--next" title="Next month"><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
        </div>
      </div>
    </header> 
  );
}
