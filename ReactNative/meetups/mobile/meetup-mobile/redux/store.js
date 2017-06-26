import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducer';
import ReduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
const store = createStore(reducers, /* preloadedState, */ compose(
    applyMiddleware(ReduxThunk, reduxLogger)
  ));
export default store;