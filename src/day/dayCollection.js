import createDay from './index.js';
import eachDay from 'date-fns/each_day';

function dayCollection(startDate, endDate) {
    let range = eachDay(startDate, endDate); 

    let days = range.map((date) => {
        return createDay(date); 
    });

    return days; 
};