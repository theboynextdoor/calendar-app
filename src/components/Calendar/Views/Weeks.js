import React from 'react';
import lastDayOfWeek from 'date-fns/last_day_of_week';
import isEqual from 'date-fns/is_equal';
import getISOWeek from "date-fns/get_iso_week";
import getYear from "date-fns/get_year";
import getDate from "date-fns/get_date"; 
import Reminders from "../../Reminder/Reminders";
import Day from "./Day";

// Day(Key, day, style, reminders)
function Weeks({dates, onClick, getReminders }) {
  // get the last day of the week from the first day in the list 
  let lastDayInWeek = lastDayOfWeek(dates[0]);
  
  // stores the day inside a week 
  let week = [];
  
  // stores the weeks
  let weeks = [];
    
  for (let nth = 0; nth <= dates.length; nth++) {
    // create day component 
    // create reminder component
    // store reminder component inside day component
    let dayComponent = (
      <Day key={dates[nth]} day={getDate(dates[nth]).toString()} style={nth === 0 ? _styleDay(dates[nth]) : {}}>
        <Reminders reminders={getReminders(dates[nth])} onClick={onClick}/>
      </Day>
    ); 
      
    if (isEqual(lastDayInWeek, lastDayOfWeek(dates[nth]))) {
      week.push(dayComponent);     
    } else {
      weeks.push(<div className="calendar__week" key={getISOWeek(dates[nth]) + "-" + getYear(dates[nth])}>{week}</div>); 
      // reset week
      week = []; 
      // add new day to the empty week
      week.push(dayComponent);
      
      lastDayInWeek = lastDayOfWeek(dates[nth]);
    }
      
  }
    
  return (
    <React.Fragment>
      {weeks}
    </React.Fragment>
  );
}

function _styleDay(num) {
  return { 
    marginLeft: num * 14.2857143 + "%",
    borderLeft: "1px solid #e0e0e0"
  }
}


export default Weeks; 