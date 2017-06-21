"use strict"
import React from 'react';
import Menu from './components/menu';
import Footer from './components/footer';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import BooksList from './components/pages/booksList';
import Cart from './components/pages/cart';
import BookForm from './components/pages/bookForm';
import Main from './components/main';


const routes = (
        <Router history = {browserHistory}>
            <Route path = "/" component = {Main}>
                <IndexRoute component = {BooksList}/>
                <Route path = "/admin" component = {BookForm}/>
                <Route path = "/cart" component = {Cart}/>
                <Route path = "/book-list" component = {BooksList}/>
            </Route>
        </Router>
);

export default routes;


