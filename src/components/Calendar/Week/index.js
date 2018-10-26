import React from "react";
import Day from "../Day";
import Reminder from "../../Reminder";
import getDate from "date-fns/get_date";
import getDay from "date-fns/get_day";
import "./style.css";

function _styleDay(num) {
  return { 
    marginLeft: num * 14.2857143 + "%",
    borderLeft: "1px solid #e0e0e0"
  }
}

function Week(props) {
  let week = Object.keys(props.days).map((day, index) => {
              return (
                <Day 
                  key={day} 
                  day={getDate(day)} 
                  style={(index === 0) ? _styleDay(getDay(day)): {}}>
                  
                  {props.days[day].reminders.map((reminder) => (<Reminder reminder={props.reminders[reminder]} />))}
                  
                </Day>
              );
            });
            
  return (
    <div className="calendar__week">
      {week}
    </div>
  );
}

export default Week; 