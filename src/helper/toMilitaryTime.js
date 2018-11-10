import isValidTime from "./isValidTime"; 

export default function toMilitaryTime(time) {
    // if the time is invalid it will throw an error
    if (!isValidTime(time)) {
        return false;  
    }
    
    // Regular exoression is for any combination of "AM" or "PM"
    let regex = /[AaPp][Mm]/; 
    
    // Extracts the meridiem from the time string 
    let meridiem = time.match(regex)[0]; 
    
    // extracts the hours and minutes from the time string
    let [hours, minutes] = time.replace(regex, "").split(":");
    
    if (hours === "12") {
        hours = "0"; 
    }
    
    if (meridiem.toUpperCase() === "PM") {
        hours = parseInt(hours, 10) + 12;
    } else {
        hours = (parseInt(hours, 10) < 10) ? "0" + hours : hours;
    }
    
    return `${hours}:${minutes}`;
}