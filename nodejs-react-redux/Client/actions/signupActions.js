import axios from 'axios';
export function userSignupRequest(userData){
    return dispatch => {
        return WebAuthnExtensions.post('/api/users');
    }
}