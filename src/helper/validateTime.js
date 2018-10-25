export function isValidTime(time) {
    if (typeof time !== "string") {
        return false; 
    }
    
    // strips away all white space 
    let trimmedTime = time.replace(/ /g, ''); 
    
    // only check for time formats without trailing 0, e.g. 1:00PM, 2:00PM
    let timeRegex = /^(1[1-2]|[1-9]):([0-5]?[0-9])([AaPp][Mm])$/;
    
    // returns if the string is valid 
    return timeRegex.test(trimmedTime);
}

export function to24hrFormat(time) {
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