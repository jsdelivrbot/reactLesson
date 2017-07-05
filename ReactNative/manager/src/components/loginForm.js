import React, { Component } from 'react';
import { Card, CardSection, Header, Input, Button  } from './commons';
import { Text } from 'react-native';
import {connect} from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
    state = {  }
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    render() {
        const {email, password} = this.props;
        return (
            <Card>
                <CardSection>
                    <Input 
                        label = "Email"
                        placeholder = "email@company.com"
                        onChangeText = {this.onEmailChange.bind(this)}
                        value = { email }
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label = "Password"
                        secureTextEntry
                        placeholder = "password"
                        onChangeText = {this.onPasswordChange.bind(this)}
                        value = { password }
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    email: state.auth.email,
    password: state.auth.password
});

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged
})(LoginForm);