import React, { Component } from 'react';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './commons';
import {Text} from 'react-native';

class LoginForm extends Component {
    state = { 
        email: '',
        password: "",
        error: "",
        loadding: false
    }
    onLoginPress(){
        const {email, password} = this.state;
        this.setState({
            error: "",
            loadding: true
        })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(()=>{
                    this.setState({
                        email: "",
                        password: "",
                        error: "",
                        loadding: false
                    })
            })
            .catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(()=>{
                    this.setState({
                        email: "",
                        password: "",
                        error: "",
                        loadding: false
                    })
                })
                    .catch((error)=>{
                        this.setState({
                            error: `Đã có lỗi ${error}`,
                            loadding: false
                        });
                    });
            });
    }

    renderLoginButton() {
        if(this.state.loadding === true) {
            return <Spinner size = 'small' />
        }
        return (
            <Button onPress = {this.onLoginPress.bind(this)}>
                login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        placeholder = "Điền địa chỉ email"
                        label = "Email: "
                        value = {this.state.email}
                        onChangeText = {email=> this.setState({email})}
                        />
                </CardSection>
                <CardSection>
                    <Input
                        placeholder = "password"
                        secureTextEntry
                        label = "password"
                        value = {this.state.password}
                        onChangeText = {password=>this.setState({password})}
                    />
                </CardSection>
                <Text style = {styles.errorStyle}>{this.state.error}</Text>
                   
                <CardSection>
                     {this.renderLoginButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;