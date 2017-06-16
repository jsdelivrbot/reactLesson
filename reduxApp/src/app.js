"use strict"
import {createStore} from 'redux';
import reducers from './reducers';
import {addToCart} from './actions/cartActions';
import { PostBook, DeleteBook, UpdateBook } from './actions/bookActions';

const store = createStore(reducers);

store.subscribe(function(){
    console.log("current state is: ", store.getState());
});

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
store.dispatch(PostBook([{    
        id: 3,
        title: 'book 3',
        discription: "in this book we are going to learn how to use nodejs and reactjs to development an application",
        price: 100
}]));

//Delete
store.dispatch(DeleteBook({id: 2 }));
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

console.log("connected!");