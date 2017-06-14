import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import redux, {createStore, compose, combineReducers} from 'redux';
import reducer from './reducers';

const store = createStore(reducer, compose(
    window.devToolsExtension? window.devToolsExtension() : f=> f
    ));

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app')
    );
