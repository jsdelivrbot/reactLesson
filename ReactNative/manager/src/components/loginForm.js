import React, { Component } from 'react';
import { Card, CardSection, Header, Input, Button, Spinner  } from './commons';
import { Text, View } from 'react-native';
import {connect} from 'react-redux';
import { 
    emailChanged, 
    passwordChanged,
    loginUser
} from '../actions';

class LoginForm extends Component {
    state = {  }
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onLoginPress() {
        const {email, password, loginUser} = this.props;
        loginUser({email, password});
    }
    renderMessage(){
        const {error,user} = this.props;
        if(error) {
            return (
                <Text style = {styles.erroMessage}>{error}</Text>
            );
        }
        if(user) {
            return (
                    <Text style = {styles.successMessage}>Login successful</Text>
               
            );
        }
    }
    renderButtonLogin() {
        if(this.props.loading) {
            return (
                <Spinner size = 'small'/>
            );
        }
        return (
            <Button
                onPress = {this.onLoginPress.bind(this)}
            >
                Login
            </Button>
        );
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
                {this.renderMessage()}
                <CardSection>
                    {this.renderButtonLogin()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    erroMessage: {
        color: 'red',
        fontSize: 18
    },
    successMessage: {
        color: 'green',
        fontSize: 18
    }
}

const mapStateToProps = (state, ownProps) => {
    const {email, password, error, user, loading} = state.auth;
    return {
    email,
    password,
    error,
    user,
    loading
}};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);