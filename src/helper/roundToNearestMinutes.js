import getMinutes from "date-fns/get_minutes";
import setMinutes from "date-fns/set_minutes";
import startOfMinute from "date-fns/start_of_minute"; 
// https://github.com/date-fns/date-fns/issues/787  

export default function roundToNearestMinutes(date, interval) {
  let roundedMinutes = Math.floor(getMinutes(date) / interval) * interval; 
  
  return setMinutes(startOfMinute(date), roundedMinutes);
}