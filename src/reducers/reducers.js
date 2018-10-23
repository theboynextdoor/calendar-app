import {
    ADD_REMINDER, 
    EDIT_REMINDER, 
    DELETE_REMINDER, 
    ExpansionFilters,
    SET_CALENDAR_EXPANSION
} from '../actions/actions.js';

import { combineReducers } from 'redux';

const initialState = {
    expansionFilters: ExpansionFilters.BY_MONTH,
    days: {},
    reminders: {}
};

// Private Functions
function _addReminderForDays(state, action) {
    var reminder = action.reminder; 
    var day = state[reminder.date];

    day.reminders.push(reminder.id); 
    return Object.assign({}, state, { day });    
}

function _addReminderForReminders(state = {}, action) {
    var reminder = action.reminder; 
    return Object.assign({}, state, {
        [reminder.id]: Object.assign({}, reminder)
    });
}


function _editReminderForDays(state, action) {
    if (!state.hasOwnProperty(action.date)) {
        return state; 
    }
    var s = _deleteReminderForDays(state, action); 
    return _addReminderForDays(s, action); 
}

function _editReminderForReminders(state = {}, action) {
    var reminder = action.reminder; 

    if (!state.hasOwnProperty(reminder.id)) {
        return state; 
    }

    var reminder = action.reminder; 
    var editedReminder = Object.assign({}, state[reminder.id], reminder); 
    
    return Object.assign({}, state, {
        [reminder.id]: editedReminder
    });

}

function _deleteReminderForDays(state, action) {
    var s = Object.assign({}, state); 
    for (var id in s) {
        if(s.hasOwnProperty(id)) {
            if(s[id].reminders.includes(action.id)) {
              s[id].reminders = s[id].reminders.filter((reminder) => reminder !== action.id);
            }
        }    
    }
    
    return s; 
}

function _deleteReminderForReminders(state, action) {
    if (!state.hasOwnProperty(action.id)) {
        return state; 
    }

    var s = Object.assign({}, state); 
    delete s[action.id]; 

    return s; 
}


export function reminders(state = {}, action) {
    switch(action.type) {
        case ADD_REMINDER:
            return _addReminderForReminders(state, action); 
        case EDIT_REMINDER:
            return _editReminderForReminders(state, action);
        case DELETE_REMINDER: 
            return _deleteReminderForReminders(state, action);
        default: 
            return state; 
    }
}

export function days(state = {}, action) {
    switch(action.type) {
        case ADD_REMINDER:
            return _addReminderForDays(state, action); 
        case DELETE_REMINDER:
            return _deleteReminderForDays(state, action);
        case EDIT_REMINDER: 
            return _editReminderForDays(state, action);
        default: 
            return state; 
    }
}

export function expansionFilter(state = "BY_MONTH", action) {
    switch(action.type) {
        case SET_CALENDAR_EXPANSION:
            return action.expansion;
        default: 
            return state; 
    }
}


const calendarApp = combineReducers({
    expansionFilter, 
    days,
    reminders
});

export default calendarApp; 