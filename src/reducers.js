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

function calendarApp(state = initialState, action) {
    switch (action.type) {
        case SET_CALENDAR_EXPANSION:
            return Object.assign({}, state, {
                expansionFilter: action.expansionFilter
            });
        case ADD_REMINDER: 
            
        default:
            return state;
    }
}

export function reminders(state = {}, action) {
    switch(action.type) {
        case ADD_REMINDER:
        case EDIT_REMINDER:
            return Object.assign({}, state, {
                [action.id]: Object.assign({}, action)
            });
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
    // we don't want to add a reminder to a day that exists
    if (state.hasOwnProperty(action.date)) {
        return state; 
    }

    if(!state[action.date].reminders.includes(action.id)) {
        var s = Object.assign({}, state); 
        s[action.date].reminders.push(action.id); 
        return s; 
    }

    return state; 
}