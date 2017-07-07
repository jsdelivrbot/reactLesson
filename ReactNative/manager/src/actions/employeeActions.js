import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMPLOYEE_UPDATE, 
    EMPLOYEE_CREATE,
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }   
}

export const employeeCreate = ({ name, phone, shift }) => {
    // console.log(`name = ${name}, phone = ${phone}, shift = ${shift}`);
    const { currentUser } = firebase.auth();
    return (dispatch)=> {
        firebase.database().ref(`users/${currentUser.uid}/employees`)
            .push( { name, phone, shift } )
            .then(()=> {
                dispatch({ type: EMPLOYEE_CREATE })
                Actions.employeeList({ reset: 'true' })
            })
    }
}

export const employeeFetch = ()=> {
    const { currentUser } = firebase.auth();
    return (dispatch)=> {
        firebase.database().ref(`users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            // console.log("snapshot = ", snapshot.val());
            dispatch({
                type: EMPLOYEE_FETCH_SUCCESS,
                payload: snapshot.val()
            })
        })
    }
}

export const employeeSave = ({ name, phone, shift, uid })=> {
    const {currentUser} = firebase.auth();

    return (dispatch)=> {
        firebase.database().ref(`users/${currentUser.uid}/employees`)
            .set({ name, phone, shift})
            .then(()=> {
                dispatch({
                    type: EMPLOYEE_SAVE_SUCCESS
                })
                Actions.employeeList({ type: 'reset'})
            })
    }
}