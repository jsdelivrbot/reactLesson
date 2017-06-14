
import { combineReducers} from 'redux';
import mangReducer from './mangReducer';
import isAddingReducer from './isAddingReducer';

 const reducer = combineReducers({
    mang: mangReducer,
    isAdding: isAddingReducer
})

export default reducer;