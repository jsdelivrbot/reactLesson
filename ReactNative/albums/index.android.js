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
import AlbumList from './src/components/albumList';
export default class authentication extends Component {
  render() {
    
    return (
      <View style = {{ flex:1 }}>
        <Header headerText = {"Albums"}/>
        <AlbumList />
      </View>
    );
  }
}


AppRegistry.registerComponent('authentication', () => authentication);
