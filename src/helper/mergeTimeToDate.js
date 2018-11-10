import isValidTime from "./isValidTime"; 
import toMilitaryTime from "./toMilitaryTime";
import addHours from "date-fns/add_hours"; 
import addMinutes from "date-fns/add_minutes";
import format from "date-fns/format"; 
import parse from "date-fns/parse";

export default function mergeTimeToDate(time, date) {
  // if time is invalid return error 
  if (!isValidTime(time)) {
    throw new Error(`${time} is invalid`);
  }
  
  // convert string date to a date object
  let parseDate = parse(date);
  
  if (parseDate === "Invalid Date") {
    throw new Error(`${parseDate} is not a valid date`); 
  }
  
  let militaryTime = toMilitaryTime(time); 
  
  let [ hours, minutes ] = militaryTime.split(":"); 
  
  let mergedDate = addMinutes(addHours(parseDate, hours), minutes); 
  
  return format(mergedDate); 
}