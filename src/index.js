import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore,applyMiddleware, compose } from 'redux'
import './index.css';
import App from './App';
import Reducers from './redux/Reducers'
import * as serviceWorker from './serviceWorker';
const reduxDevtools = window.devToolsExtension? window.devToolsExtension():f=>f;
let store=createStore(Reducers,compose(applyMiddleware(thunk), reduxDevtools));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
