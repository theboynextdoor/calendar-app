import { createStore } from 'redux'; 
import initState from './initState.js';
import calendarApp from './reducers.js';


const now = new Date(); 
const store = createStore(calendarApp, initState(now));
