import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {fetchMeetup} from './constants/api.js';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/colors';
import { HomeScreen } from './screens';
EStyleSheet.build(Colors);
export default class App extends React.Component {
  render(){
    return(
      <View>
        <HomeScreen/>
      </View>
    )
  }
}

