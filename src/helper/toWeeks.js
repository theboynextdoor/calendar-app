import isSameWeek from 'date-fns/is_same_week'; 
import lastDayOfWeek from 'date-fns/last_day_of_week';
import isEqual from 'date-fns/is_equal';

function toWeeks(days) {
    let weeks = [];
    let week = []; 
    let currentWeek = lastDayOfWeek(days[0]); 
    
    for (let nth = 0; nth < days.length; nth++) {
        if (isEqual(currentWeek, lastDayOfWeek(days[nth]))) {
            week.push(days[nth]); 
        } else {
            weeks.push(week); 
            week = [];
            week.push(days[nth]);
            currentWeek = lastDayOfWeek(days[nth])
        }
    }
    
    return weeks;
}

export default toWeeks; 