

import redux, {createStore} from 'redux';
const defaultState = {
    mang: ['android', 'javascript', 'Nodejs','React'],
    isAdding: false
};
const reducer = (state = defaultState, action)=>{
    switch(action.type){
        case 'TOGGLE_IS_ADDING_NOTE':
            return {...state, isAdding: !state.isAdding}
        case 'ADD_NEW_NOTE':
            return {...state, mang: [...state.mang, action.newNote]}
        case 'REMOVE_NOTE':
            return {...state, mang:[...state.mang.slice((value, key)=>{
                return key != action.IndexRemoveNote;
            })]}
        default:
            return state;
    }
    
}

const store = createStore(reducer);
console.log('before dispatch ',store.getState());
store.dispatch({type: 'TOGGLE_IS_ADDING_NOTE'})
console.log('after dispatch ',store.getState());

store.dispatch({
    type: 'ADD_NEW_NOTE',
    newNote: 'GraphQL'
})

console.log('after dispatch ADD_NEW_NOTE ',store.getState());

store.dispatch({
    type: 'REMOVE_NOTE',
    IndexRemoveNote: '4'
});
console.log('after dispatch REMOVE_NOTE ',store.getState());