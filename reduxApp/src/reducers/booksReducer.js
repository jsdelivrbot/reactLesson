"use strict"
//Book Reducer
export default function booksReducers (state = [], action){
    switch(action.type){
        case "Get_BOOKS":
            // console.log(action.payload);
            return [...state, ...action.payload];
        case "POST_BOOK":
            return [...state, ...action.payload];
        case "DELETE_BOOK":
            return state.filter(function(e, i){
                return e.id != action.payload.id;
            });
        case "UPDATE_BOOK":
            const cloneBooks = [];
            state.forEach(function(item){
                if(item.id == action.payload.id){
                    item = action.payload;
                }
                cloneBooks.push(item);
            });
            return cloneBooks;

        default:
            return state;
    }
}