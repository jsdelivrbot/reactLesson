import { combineReducers } from 'redux';
import BookReducer from './reducer_book';
const rootReducer = combineReducers({
  books: BookReducer
});

export default rootReducer;
/*
reducer chứa toàn bộ state (trạng thái) của ứng dụng. và sẽ dc truy xuất bất kỳ đâu trong toàn bộ ứng dụng.
Trong ví dụ này. books sẽ dc truy xuất trong book-list.

*/