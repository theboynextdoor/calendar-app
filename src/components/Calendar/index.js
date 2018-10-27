import React, { Component } from 'react';
import { connect } from "react-redux";

import Week from './Week';
import Header from './Header';
import Day from './Day';
import Reminders from '../Reminder/Reminders';

// Util
import getDate from 'date-fns/get_date';
import isSameWeek from 'date-fns/is_same_week'; 
import lastDayOfWeek from 'date-fns/last_day_of_week';
import isEqual from 'date-fns/is_equal';
import getDay from "date-fns/get_day";
import getISOWeek from "date-fns/get_iso_week";
import getYear from "date-fns/get_year";

class Calendar extends Component {
    constructor(props) {
        super(props); 
        
        this.handleClickingReminder = this.handleClickingReminder.bind(this);
    }
    
    handleClickingReminder(event, id) {
        let { reminders } = this.props; 
        
        console.log(reminders[id]);
    }
    
    getDayReminders(dayId) {
        let day = this.props.days[dayId]; 
        
        if (!day) {
            return null; 
        }
        
        let reminders = this.props.reminders; 
        
        return day.reminders.map((reminder) => {
            return reminders[reminder];
        });
    }
    
    renderWeeks() {
        let days = this.props.days; 
        let dates = Object.keys(days);
        let currentWeek = lastDayOfWeek(dates[0]); 
        let weeks = [];
        let week = []; 
        
        for (let nth = 0; nth <= dates.length; nth++) {
            // create day jsx 
            let dayElement = ( 
                <Day 
                    key={dates[nth]} 
                    day={(getDate(dates[nth])).toString()}
                    style={nth === 0 ? _styleDay(getDay(dates[nth])) : {}}    
                >
                    {
                        <Reminders reminders={this.getDayReminders(dates[nth])} onClick={this.handleClickingReminder}/> 
                    }
                </Day>
            );
            
            if(isEqual(currentWeek, lastDayOfWeek(dates[nth]))) {
                week.push(dayElement); 
            } else {
                weeks.push(<div className="calendar__week" key={getISOWeek(dates[nth]) + "-" + getYear(dates[nth])}>{week}</div>); 
                // reset week
                week = []; 
                // add new day to the empty week
                week.push(dayElement);
                
                currentWeek = lastDayOfWeek(dates[nth]);
            }
        }
    
        return weeks; 
    }
    
    render() {
        return (
            <div className="calendar">
                <Header />
                {this.renderWeeks()}
            </div>
        ); 
    }
}

function _styleDay(num) {
  return { 
    marginLeft: num * 14.2857143 + "%",
    borderLeft: "1px solid #e0e0e0"
  }
}

const mapStateToProps = state => {
    return {
        days: state.days, 
        reminders: state.reminders
    }
}

export default connect(mapStateToProps)(Calendar);