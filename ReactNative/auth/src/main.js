import React, { Component } from 'react';
import {Header, Button, CardSection} from './components/commons';
import {View} from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/loginForm';

class Main extends Component {
    state = {
        loggedIn: false
    };
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAUaYNtSm2JrP-QNWt8ftG8Pmm5lbM5qpc',
            authDomain: 'authentication-c97b0.firebaseapp.com',
            databaseURL: 'https://authentication-c97b0.firebaseio.com',
            projectId: 'authentication-c97b0',
            storageBucket: 'authentication-c97b0.appspot.com',
            messagingSenderId: '973039468572'
        });

        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({ loggedIn: true })
            }
            else {
                this.setState({ loggedIn: false })
            }
        });
    }

    onLogOutPress() {
        firebase.auth().signOut();
    }

    renderContent() {
        if(this.state.loggedIn) {
            return (
                <CardSection>
                    <Button onPress = {this.onLogOutPress} >
                        log out
                    </Button>
                </CardSection>
            );
        }
        return (
            <LoginForm />
        );
    }

    render() {
        return (
            <View>
                <Header headerText = {'Authentication'} />
                {this.renderContent()}
            </View>
        );
    }
}

export default Main;