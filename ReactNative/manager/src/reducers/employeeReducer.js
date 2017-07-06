import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            const newState = {...state, [action.payload.prop]: action.payload.value };
            // console.log("new state = ", newState);
            return newState;
    
        default:
            return state;
    }
}