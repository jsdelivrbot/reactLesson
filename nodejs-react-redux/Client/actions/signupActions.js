import axios from 'axios';
export const SIGNUP_USER = 'SIGNUP_USER';

export function userSignupRequest(userData){
    console.log("userData = ", userData);
    // return dispatch => {
    //     return axios.post('/api/users');
    // }
    const request = axios.post('/api/users', {user: userData});
    console.log("request = ", request)
    return {
        type: SIGNUP_USER,
        payload: request
  };
}