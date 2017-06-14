

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
export default mangReducer;