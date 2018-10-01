import {
    ADD_REMINDER, 
    EDIT_REMINDER, 
    DELETE_REMINDER, 
    ExpansionFilters,
    SET_CALENDAR_EXPANSION
} from './actions.js';


const initialState = {
    expansionFilters: ExpansionFilters.BY_MONTH,
    days: {},
    reminders: {}
};


export function reminders(state = {}, action) {
    switch(action.type) {
        case ADD_REMINDER:
        case EDIT_REMINDER:
            return _addReminderToReminders(state, action); 
        case DELETE_REMINDER: 
            return _deleteReminderFromReminders(state, action);
        default: 
            return state; 
    }
}

export function days(state = {}, action) {
    switch(action.type) {
        case ADD_REMINDER:
            return _addReminderIdToDays(state, action); 
        case DELETE_REMINDER:
            return _deleteReminderIdFromDays(state, action);
        case EDIT_REMINDER: 
            return _editReminderFromDays(state, action);
        default: 
            return state; 
    }
}

export function expansionFilter(state = BY_MONTH, action) {
    switch(action.type) {
        case SET_CALENDAR_EXPANSION:
            return action.expansion;
        default: 
            return state; 
    }
}

function _addReminderToReminders(state, action) {
    return Object.assign({}, state, {
        [action.id]: Object.assign({}, action)
    });
}

function _editReminderFromDays(state, action) {
    if (!state.hasOwnProperty(action.date)) {
        return state; 
    }
    var s = _deleteReminderIdFromDays(state, action); 
    return _addReminderIdToDays(s, action); 
}

function _deleteReminderFromReminders(state, action) {
    if (!state.hasOwnProperty(action.id)) {
        return state; 
    }

    var s = Object.assign({}, state); 
    delete s[action.id]; 

    return s; 
}
function _deleteReminderIdFromDays(state, action) {
    if (!state.hasOwnProperty(action.date)) {
        return state; 
    }

    var s = Object.assign({}, state);
    s[action.date].reminders = s[action.date].reminders.filter((reminderId) => {
        return reminderId !== action.id; 
    });

    return s; 

}

function _addReminderIdToDays(state, action) {
    if (state.hasOwnProperty(action.date)) {
        return state; 
    }

    var isReminderInDay = state[action.date].reminders.includes(action.id);
    var s = Object.assign({}, state); 
    
    if (!isReminderInDay) {
        s[action.date].reminders.push(action.id); 
        return s; 
    }

    return state; 
}


function calendarApp(state = {}, action) {
    return {
        expansionFilter: expansionFilter(state.expansionFilter, action), 
        days: days(state.days, action),
        reminders: reminders(state.reminders, action)
    };
}

export default calendarApp; 