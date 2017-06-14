
const isAddingReducer = (state = false, action)=>{
    switch(action.type){        
        case 'TOGGLE_IS_ADDING_NOTE':
            return !state;
        default:
            return state;
    }
}

export default isAddingReducer;