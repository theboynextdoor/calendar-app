import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import calendarApp from './reducers/reducers';
import { createStore } from 'redux';
import initState from './initState';

import { Provider } from "react-redux";

const store = createStore(calendarApp, initState(new Date()), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 
const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
registerServiceWorker();
