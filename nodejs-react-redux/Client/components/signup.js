import React from 'react';
import SignupForm from './signupForm';
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
export default signup;