import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import store from "./store";
import App from './src/containers/App';
import './src/containers/index.css';



const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action: ", action);
    next(action);
};

store.subscribe(() => {
    console.log("Store updated!", store.getState());
});



render(<Provider store={store}><App /></Provider>, document.getElementById('root'));