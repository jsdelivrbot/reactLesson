

import redux, {createStore, compose} from 'redux';
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
            return {...state, mang:[...state.mang.filter((e, i)=>{
                return i != action.IndexRemoveNote;
            })]}
        default:
            return state;
    }
    
}

const store = createStore(reducer, compose(
    window.devToolsExtension? window.devToolsExtension() : f=> f
    ));
store.subscribe(()=>{
    console.log("store has been change: ", store.getState());
})

store.dispatch({type: 'TOGGLE_IS_ADDING_NOTE'})

store.dispatch({
    type: 'ADD_NEW_NOTE',
    newNote: 'GraphQL'
})

store.dispatch({
    type: 'REMOVE_NOTE',
    IndexRemoveNote: 3
});