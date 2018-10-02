import { assert } from 'chai';
import createMockState, { createMockDays, createMockReminders } from './createMockState';
import { 
    addReminder, 
    editReminder, 
    deleteReminder
} from './actions.js';
import { reminders, days } from './reducers.js'; 

describe("The days Reducer", () => {
    var state = {};
    
    beforeEach(() => {
        state = createMockState();
    });
    
    describe("when DELETE_REMINDER action is dispatched", () => {
        it("should remove the specified reminder ID from days' state", () => {
            var reminderId = "d122"; 
            state.days = days(state.days, deleteReminder(reminderId));
            
            assert.notInclude(state.days["2018-10-03"].reminders, reminderId);
        });
    });
    
    describe("when ADD_REMINDER action is dispatched", () => {
        it("should add the reminder ID to its appropriate day", () => {
            var reminderPayload = {
                id: "d129",
                title: 'Go to the corner store',
                date: '2018-10-01',
                time: '5:00:00',
                color: 'Green'
            }; 
            state.days = days(state.days, addReminder(reminderPayload));  
            
            assert.include(state.days["2018-10-01"].reminders, reminderPayload.id);
            
        });
    });
}); 

describe("Reminders' Reducer", () => {
    var state = {}; 
    beforeEach(() => {
        state = createMockReminders();
    });

    describe("when ADD_REMINDER action is dispatched", () => {
        var newReminder;
        
        beforeEach(() => {
            newReminder =  {
                id: 'd126',
                title: 'Go to the corner store',
                date: '2018-10-01',
                time: '5:00:00',
                color: 'Green'
            }; 
        });
        
        it('should add the new reminder to the Reminders Store', () => {
            state = reminders(state,addReminder(newReminder)); 
            assert.property(state, newReminder.id);
        });
        
        it('should increase the size of the Reminders Store by 1', () => {
            state = reminders(state, addReminder(newReminder)); 
            var size = Object.keys(state).length; 

            assert.strictEqual(size, 4);
        });
    });

    describe("when EDIT_REMINDER action is dispatched", () => {
        it("should not change the size of Reminders state", () => {
            state = reminders(state, editReminder({
                id: "d122", 
                title: "A dogs best friend"
            })); 

            assert.strictEqual(Object.keys(state).length, 3);
        });

        it("should not change the number of properties on the specified reminder", () => {
            var expected = {
                id: 'd122',
                title: "A dogs best friend",
                date: '2018-10-03',
                time: '12:30:00',
                color: 'BLUE'
            };

            state = reminders(state, editReminder({
                id: "d122", 
                title: "A dogs best friend"
            })); 
            
            assert.deepEqual(state[expected.id], expected);
        });
    });
    
    describe("when DELETE_REMINDER is dispatched", () => {
        it("should remove the reminder from the reminders state", () => {
            var reminderId = "d122";
            state = reminders(state, deleteReminder(reminderId));

            assert.notExists(state["d122"]);
        });
    });
});

