import isSameWeek from 'date-fns/is_same_week'; 

function toWeeks(days) {
    let weeks = [];
    let nth = 0;
    
    for (let current = 0; current < days.length; current++) {
        if (current === 0) {
            weeks[nth] = [ days[current] ]; 
        } else if(isSameWeek(days[current], days[current - 1])) {
            weeks[nth].push(days[current]);
        } else {
            weeks[++nth] = [ days[current] ] 
        }
    }
    
    return weeks; 
}

export default toWeeks; 