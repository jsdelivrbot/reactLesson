/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './src/components/header';

export default class albums extends Component {
  render() {
    
    return (
      <View>
        <Header headerText = {"Albums"}/>
      </View>
    );
  }
}


AppRegistry.registerComponent('albums', () => albums);
