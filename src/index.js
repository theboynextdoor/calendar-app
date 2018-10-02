import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'; 
import initState from './initState.js';
import calendarApp from './reducers.js';
import {addReminder, editReminder, deleteReminder} from './actions.js';
const now = new Date(); 
const store = createStore(calendarApp, initState(now));

console.log(store.getState());

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(addReminder({id: "d122", title: "New Reminder", date: "2018-10-04", time:"1:00:00", color: 'BLUE'}));
store.dispatch(deleteReminder("d122"));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
