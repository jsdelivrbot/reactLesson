"use strict"
import {combineReducers} from 'redux';

import booksReducers from './booksReducer';

const reducers = combineReducers({
    books: booksReducers
});
export default reducers;