import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import App from './components/App';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStore(reducers, /* preloadedState, */ compose(
    applyMiddleware(ReduxPromise),
    window.devToolsExtension? window.devToolsExtension() : f=> f
  ));

render(
    <Provider store={store} >
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('app'));