import eachDay from "date-fns/each_day";
import format from "date-fns/format"
import addYears from "date-fns/add_years";
import subMonths from "date-fns/sub_months";

// private method 
function firstDay(date) {
    var d = new Date(date);
    return new Date(d.getFullYear(), d.getMonth(), 1);
}

function initState(date) {
    return {
        expansionFilter: "BY_MONTH",
        days: initDays(date), 
        reminders: {},
        showReminderForm: false
    }
}

export function initDays(date) {
    var dates = eachDay(firstDay(subMonths(date, 2)), addYears(date, 1.5));
    var dateFormat = "YYYY-MM-DD";
    var days = {}; 
    
    dates.forEach((date) => {
        days = Object.assign({}, days, {
           [format(date, dateFormat)]: {
               date: format(date, dateFormat),
               reminders: []
           }
        });
    });

    return days; 
}

export default initState; 