import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore,applyMiddleware, compose } from 'redux'
import './index.css';
import App from './App';
import 'babel-polyfill';
import Reducers from './redux/Reducers'
import * as serviceWorker from './serviceWorker';
import {createLogger} from 'redux-logger';
const logger = createLogger({
    duration: true,
    level: "info",
    collapsed: (getState, action)=>{
      return true
    }
});
const reduxDevtools = window.devToolsExtension? window.devToolsExtension():f=>f;
let store=createStore(Reducers,compose(applyMiddleware(thunk,logger), reduxDevtools));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
