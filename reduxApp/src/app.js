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

//bước 2: tạo action và dispatch actions
store.dispatch(PostBook([{    
        id: 1,
        title: 'book 1',
        discription: "in this book we are going to learn how to use nodejs and reactjs to development an application",
        price: 100
}]));
store.dispatch(PostBook([{    
        id: 2,
        title: 'book 2',
        discription: "in this book we are going to learn how to use nodejs and reactjs to development an application",
        price: 100
}]));
store.dispatch(PostBook([
    {    
        id: 3,
        title: 'book 3',
        discription: "in this book we are going to learn how to use nodejs and reactjs to development an application",
        price: 100
    },
    {    
        id: 4,
        title: 'book 4',
        discription: "in this book we are going to learn how to use nodejs and reactjs to development an application",
        price: 100
    },
    {    
        id: 5,
        title: 'book 5',
        discription: "in this book we are going to learn how to use nodejs and reactjs to development an application",
        price: 100
    }
]));

//Delete
// store.dispatch(DeleteBook({id: 2 }));
//update
store.dispatch(UpdateBook(
    {
        id: 3,
        title: 'book 3',
        discription: "in this book we are going to learn how to use nodejs and reactjs to development an application",
        price: 50
    }
));
//Cart actions
store.dispatch(addToCart([{id: 2}]));


