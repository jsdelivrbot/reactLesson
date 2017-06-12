import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(
    // (state = {}) => sate,
    applyMiddleware(thunk)
);
// const store = applyMiddleware()(createStore);
render(
    <Provider store = {store} >
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('app'));