"use strict"
export default function booksReducers (state = [], action){
    switch(action.type){
        case "Get_BOOKS":
            return [...action.payload];
        case "POST_BOOK":
            return [...state, ...action.payload];
        case "DELETE_BOOK":
            return state.filter(function(e, i){
                return e._id != action.payload;
            });
        case "UPDATE_BOOK":
            const cloneBooks = [];
            state.forEach(function(item){
                if(item.id == action.payload._id){
                    item = action.payload;
                }
                cloneBooks.push(item);
            });
            return cloneBooks;

        default:
            return state;
    }
}