"use strict"
import {createStore} from 'redux';
//bước 3: định nghĩa reducer
const reducer = function(state = 0, action){
    switch(action.type){
        case "INCREMENT":
        return state + action.payload;
        case "DECREMENT":
        return state - action.payload;
        case "POST_BOOK":
        return state = action.payload;

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
    type: "INCREMENT",
    payload: 1
});
store.dispatch({
    type: "INCREMENT",
    payload: 1
});
store.dispatch({
    type: "INCREMENT",
    payload: 1
});
store.dispatch({
    type: "DECREMENT",
    payload: 1
});
store.dispatch({
    type: "DECREMENT",
    payload: 1
});
store.dispatch({
    type: "POST_BOOK",
    payload: {
        id: 1,
        title: 'learning nodejs and reactjs',
        discription: "in this book we are going to learn how to use nodejs and reactjs to development an application",
        price: 100
    }
});
console.log("connected!");