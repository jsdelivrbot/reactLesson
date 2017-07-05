/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/loginForm';
import ReduxThunk from 'redux-thunk';

export default class manager extends Component {
  componentWillMount() {
    firebase.initializeApp({
            apiKey: 'AIzaSyAUaYNtSm2JrP-QNWt8ftG8Pmm5lbM5qpc',
            authDomain: 'authentication-c97b0.firebaseapp.com',
            databaseURL: 'https://authentication-c97b0.firebaseio.com',
            projectId: 'authentication-c97b0',
            storageBucket: 'authentication-c97b0.appspot.com',
            messagingSenderId: '973039468572'
        });

  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store = { store }>
        <LoginForm />
      </Provider>
    );
  }
}