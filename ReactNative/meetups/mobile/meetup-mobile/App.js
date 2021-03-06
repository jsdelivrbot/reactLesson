import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { fetchMeetup } from './constants/api.js';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/colors';
import { HomeScreen } from './screens';
import Root from './Root';

EStyleSheet.build(Colors);
export default class App extends React.Component {
  render() {
    return (
      <Provider store= {store} >
        <Root />
      </Provider>
    );
  }
}
