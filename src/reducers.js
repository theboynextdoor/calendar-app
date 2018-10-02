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

export function expansionFilter(state = BY_MONTH, action) {
    switch(action.type) {
        case SET_CALENDAR_EXPANSION:
            return action.expansion;
        default: 
            return state; 
    }
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

function _deleteReminderForReminders(state, action) {
    if (!state.hasOwnProperty(action.id)) {
        return state; 
    }

    var s = Object.assign({}, state); 
    delete s[action.id]; 

    return s; 
}
function _deleteReminderForDays(state, action) {
    var reminder = action.reminder; 

    if (!state.hasOwnProperty(reminder.date)) {
        return state; 
    }

    var s = Object.assign({}, state);
    s[action.date].reminders = s[action.date].reminders.filter((reminderId) => {
        return reminderId !== action.id; 
    });

    return s; 

}

function _addReminderForDays(state, action) {
    var reminder = action.reminder; 
    var day = state[reminder.date];

    day.reminders.push(reminder.id); 
    return Object.assign({}, state, day);    
}


function calendarApp(state = {}, action) {
    return {
        expansionFilter: expansionFilter(state.expansionFilter, action), 
        days: days(state.days, action),
        reminders: reminders(state.reminders, action)
    };
}

// export default calendarApp; 