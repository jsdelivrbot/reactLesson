"use strict"
import {createStore} from 'redux';
//bước 3: định nghĩa reducer
const reducer = function(state = {books: []}, action){
    switch(action.type){
        case "POST_BOOK":
        return {books: [...state.books, ...action.payload]};
        case "DELETE_BOOK":
        return {books: state.books.filter(function(e, i){
            return e.id != action.payload.id;
        })};
        case "UPDATE_BOOK":
        const cloneBooks = [];
        state.books.forEach(function(item){
            if(item.id == action.payload.id){
                item = action.payload;
            }
            cloneBooks.push(item);
        });
        return  {books: cloneBooks};

        default:
        return state;
    }
}
//Bước 1: tạo 1 store
const store = createStore(reducer);

store.subscribe(function(){
    console.log("current state is: ", store.getState());
});

//bước 2: tạo action và dispatch actions

store.dispatch({
    type: "POST_BOOK",
    payload: [{
        id: 1,
        title: 'book 2',
        discription: "in this book we are going to learn how to use nodejs and reactjs to development an application",
        price: 100
    }]
});
store.dispatch({
    type: "POST_BOOK",
    payload: [{
        id: 2,
        title: 'book 1',
        discription: "in this book we are going to learn how to use nodejs and reactjs to development an application",
        price: 100
    }]
});
store.dispatch({
    type: "POST_BOOK",
    payload: [{
        id: 3,
        title: 'book 3',
        discription: "in this book we are going to learn how to use nodejs and reactjs to development an application",
        price: 100
    }]
});
//Delete
store.dispatch({
    type: "DELETE_BOOK",
    payload: {
        id: 1
    }
});
//update
store.dispatch({
    type: "UPDATE_BOOK",
    payload: {
        id: 3,
        title: 'book 3',
        discription: "in this book we are going to learn how to use nodejs and reactjs to development an application",
        price: 50
    }
});

console.log("connected!");