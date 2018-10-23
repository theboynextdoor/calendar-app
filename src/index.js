import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import calendarApp from './reducers/reducers';
import { createStore } from 'redux';
import initState from './initState';

import { Provider } from "react-redux";

const store = createStore(calendarApp, initState(new Date)); 
const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
registerServiceWorker();
