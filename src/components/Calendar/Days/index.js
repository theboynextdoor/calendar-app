import React from 'react'; 
import PropTypes from 'prop-types';
import Day from '../Day';
import getDate from 'date-fns/get_date';

function Days(props) {
    // Convert the props.days object keys into an array
    let ids = Object.keys(props.days);
    
    // Create <Day /> for each ID
    let $days = ids.map((id, index) => {
    
        
        return (
            <Day 
                key={id}
                day={(getDate(id)).toString()}
                reminders={props.days[id].reminders}
                // the first day of the month start on the calendar accordingly
                style={(index === 0) ? {marginLeft: getDate(id) * 14.2857143 + '%', borderLeft: '1px solid #e0e0e0'} : {}}
            />
        );
    });
    
    return (
        <div className="calendar__row">
            {$days}
        </div>
    );
}


export default Days; 