import { combineReducers } from 'redux';
import BookReducer from './reducer_book';
import ActiveBook from './reducer_active_book';
const rootReducer = combineReducers({
  books: BookReducer,
  activeBook: ActiveBook
});

export default rootReducer;
/*
reducer chứa toàn bộ state (trạng thái) của ứng dụng. và sẽ dc truy xuất bất kỳ đâu trong toàn bộ ứng dụng.
Trong ví dụ này. books sẽ dc truy xuất trong book-list.

*/