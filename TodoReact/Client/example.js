

import redux, {createStore, compose, combineReducers} from 'redux';
const defaultState = {
    mang: ['android', 'javascript', 'Nodejs','React'],
    isAdding: false
};

const mangReducer = (state = ['android', 'javascript', 'Nodejs','React', 'react native'], action)=>{
    switch(action.type){        
        case 'ADD_NEW_NOTE':
            return [...state, action.newNote]
        case 'REMOVE_NOTE':
            return [...state.filter((e, i)=>{
                return i != action.IndexRemoveNote;
                })
            ]
        default:
            return state;
    }
}
const isAddingReducer = (state = false, action)=>{
    switch(action.type){        
        case 'TOGGLE_IS_ADDING_NOTE':
            return !state;
        default:
            return state;
    }
}

 const reducer = combineReducers({
    mang: mangReducer,
    isAdding: isAddingReducer
})

export const store = createStore(reducer, compose(
    window.devToolsExtension? window.devToolsExtension() : f=> f
    ));
store.subscribe(()=>{
    console.log("store has been change: ",store.getState());
    // document.getElementById('redux-detail').innerHTML = JSON.stringify(store.getState());
})

// store.dispatch({type: 'TOGGLE_IS_ADDING_NOTE'})

// store.dispatch({
//     type: 'ADD_NEW_NOTE',
//     newNote: 'GraphQL'
// })

// store.dispatch({
//     type: 'REMOVE_NOTE',
//     IndexRemoveNote: 3
// });