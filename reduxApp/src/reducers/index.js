"use strict"
import {combineReducers} from 'redux';

import booksReducers from './booksReducer';
import cartReducers from './cartReducers';
const reducers = combineReducers({
    books: booksReducers,
    cart: cartReducers
});
export default reducers;