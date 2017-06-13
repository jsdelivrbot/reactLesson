import { combineReducers } from 'redux';
import SignupReducer from './SignupReducer';

const rootReducer = combineReducers({
  signup: SignupReducer
});

export default rootReducer;