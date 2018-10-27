import React from 'react';
import compareAsc from 'date-fns/compare_asc';
import compareDesc from 'date-fns/compare_desc';
import Reminder from './index.js';


function Reminders(props) {
  let reminders = (props.sort === "desc") ? 
      props.reminders.sort((a, b) => compareDesc(a.startTime, b.startTime)) :
      props.reminders.sort((a, b) => compareAsc(a.startTime, b.startTime));
      
  reminders = reminders.map((reminder) => (<Reminder reminder={reminder} key={reminder.id} />));
  
  return (
    <div className="reminders">
      {reminders}
    </div>
  );
}

export default Reminders;