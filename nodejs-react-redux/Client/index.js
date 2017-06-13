import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

render(
    <Provider store={createStoreWithMiddleware(reducers)} >
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('app'));