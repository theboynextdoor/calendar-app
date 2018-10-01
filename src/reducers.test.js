import { assert } from 'chai';
import { ADD_REMINDER, addReminder } from './actions.js';
import { reminders } from './reducers.js'; 

describe('reminders(state = {}, action)', () => {
    var reminders; 
    beforeAll(() => {
        reminders = {
            "d122": {
                id: 'd122',
                title: 'Interview',
                date: '2018-10-03',
                time: '12:30:00',
                color: 'BLUE'
            },
            "d123": {
                id: 'd123',
                title: 'This is a title',
                date: '2018-10-01',
                time: '12:30:00',
                color: 'BLUE'
            },
            "d124": {
                id: 'd124',
                title: 'This is a new item',
                date: '2018-10-01',
                time: '1:00:00',
                color: 'RED'
            },
        }
    });

    it('should add a new reminder object to the state', () => {
        var reminderAction = addReminder({
            id: 'd126',
            title: 'Go to the corner store',
            date: '2018-10-01',
            time: '5:00:00',
            color: 'Green'
        });

        var newReminders = reminders(reminders, reminderAction);
    });
});