import React from "react";
import compareAsc from "date-fns/compare_asc";
import compareDesc from "date-fns/compare_desc";
import Reminder from "./index.js";
import hexToRGB from "../../helper/hexToRGB";

function Reminders(props) {
  let reminders = (props.sort === "desc") ? 
      props.reminders.sort((a, b) => compareDesc(a.startTime, b.startTime)) :
      props.reminders.sort((a, b) => compareAsc(a.startTime, b.startTime));
  
  reminders = reminders.map((reminder) => {
    let styleSheet = {
      color: reminder.color.hex,
      borderLeft: `2px solid ${reminder.color.hex}`,
      backgroundColor: hexToRGB(reminder.color.hex, 0.1)
    };
    
    return (<Reminder 
      reminder={reminder} 
      key={reminder.id} 
      onClick={props.onClick} 
      style={styleSheet}
    />); 
  });
  
  return (
    <React.Fragment>
      {reminders}
    </React.Fragment>
  );
}

export default Reminders;