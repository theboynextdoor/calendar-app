import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import calendarApp from './reducers/reducers';
import { createStore } from 'redux';
import initState from './initState';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
