export default function isValidTime(time) {
    if (typeof time !== "string") {
        return false; 
    }
    
    // strips away all white space 
    let trimmedTime = time.replace(/ /g, ""); 
    
    // only check for time formats without trailing 0, e.g. 1:00PM, 2:00PM
    let timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]([AaPp][Mm])$/;
    
    // returns if the string is valid 
    return timeRegex.test(trimmedTime);
}