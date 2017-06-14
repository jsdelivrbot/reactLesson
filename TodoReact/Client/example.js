

import redux, {createStore} from 'redux';
const defaultState = {
    mang: ['android', 'javascript', 'Nodejs','React'],
    isAdding: false
};
const reducer = (state = defaultState, action)=>{
    switch(action.type){
        case 'TOGGLE_IS_ADDING_NOTE':
            return {...state, isAdding: !state.isAdding}
        default:
            return state;
    }
    
}

const store = createStore(reducer);
console.log('before dispatch ',store.getState());
store.dispatch({type: 'TOGGLE_IS_ADDING_NOTE'})
console.log('after dispatch ',store.getState());