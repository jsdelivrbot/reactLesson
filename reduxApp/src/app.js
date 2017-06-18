"use strict"
import {createStore,  applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import {addToCart} from './actions/cartActions';
import { PostBook, DeleteBook, UpdateBook } from './actions/bookActions';
import reduxLogger from 'redux-logger';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import BooksList from './components/pages/booksList';

const store = createStore(reducers, /* preloadedState, */ compose(
    // applyMiddleware(ReduxPromise),
    applyMiddleware(reduxLogger()),
    window.devToolsExtension? window.devToolsExtension() : f=> f
  ));

render(
    <Provider store = {store}>
        <BooksList/>
    </Provider>,
    document.getElementById('app')
);


