"use strict"
import {createStore,  applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import {addToCart} from './actions/cartActions';
import { PostBook, DeleteBook, UpdateBook } from './actions/bookActions';
import reduxLogger from 'redux-logger';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Menu from './components/menu';
import Footer from './components/footer';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import BooksList from './components/pages/booksList';
import Cart from './components/pages/cart';
import BookForm from './components/pages/bookForm';
import Main from './components/main';
import ReduxThunk from 'redux-thunk'

const store = createStore(reducers, /* preloadedState, */ compose(
    // applyMiddleware(ReduxPromise),
    applyMiddleware(ReduxThunk,reduxLogger()),
    window.devToolsExtension? window.devToolsExtension() : f=> f
  ));
const Routes = (
    <Provider store = {store}>
        <Router history = {browserHistory}>
            <Route path = "/" component = {Main}>
                <IndexRoute component = {BooksList}/>
                <Route path = "/admin" component = {BookForm}/>
                <Route path = "/cart" component = {Cart}/>
                <Route path = "/book-list" component = {BooksList}/>
            </Route>
        </Router>
        
    </Provider>
);
render(
    Routes,
    document.getElementById('app')
);


