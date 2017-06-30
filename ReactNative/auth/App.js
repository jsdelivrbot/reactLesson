/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';
import Main from './src/main';

export default class auth extends Component {
  render() {
    return (
      <Main />
    );
  }
}


AppRegistry.registerComponent('auth', () => auth);
