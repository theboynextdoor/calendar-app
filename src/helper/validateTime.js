var moment = require('moment');

function isValidTime(time) {
    if (typeof time !== "string") {
        return false; 
    }
    
    // strips away all white space 
    let trimmedTime = time.replace(/ /g, ''); 
    
    // only check for time formats without trailing 0, e.g. 1:00PM, 2:00PM
    let timeRegex = /^(1[1-2]|[1-9]):([0-5]?[0-9])([AP]M)$/;
    
    // returns if the string is valid 
    return timeRegex.test(trimmedTime);
}

