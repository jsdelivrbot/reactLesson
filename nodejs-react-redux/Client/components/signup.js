import React from 'react';
import SignupForm from './signupForm';
import {connect} from 'react-redux';
import {userSignupRequest} from '../actions/signupActions';

class signup extends React.Component{
    render(){
        return (
            <div id = "signup">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <SignupForm/>
                    </div>
                </div>
            </div>
        );
    };
}

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default connect((state)=> {return {}}, {userSignupRequest})(signup);