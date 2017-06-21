"use strict"
import {createStore,  applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import {addToCart} from './actions/cartActions';
import { PostBook, DeleteBook, UpdateBook } from './actions/bookActions';
import reduxLogger from 'redux-logger';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk'


// Chúng ta sẽ chuyển State khởi tạo từ SERVER STORE
const initialState = window.INITIAL_STATE;
//window.INITIAL_STATE là một biến global, chúng ta sẽ sử dụng để lưu state khởi tạo
//trên server và chuyển nó tới STORE trên client
const store = createStore(reducers, initialState, /* preloadedState, */ compose(
    // applyMiddleware(ReduxPromise),
    applyMiddleware(ReduxThunk, reduxLogger()),
    window.devToolsExtension? window.devToolsExtension() : f=> f
  ));

  import routes from './routes';
const Routes = (
    <Provider store = {store}>
        {routes}
    </Provider>
);
render(
    Routes,
    document.getElementById('app')
);


