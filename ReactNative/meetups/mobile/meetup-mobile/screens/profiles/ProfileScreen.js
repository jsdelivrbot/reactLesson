import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import color from '../../constants/colors';

class ProfileScreen extends Component {
    state = { }
    static navigationOptions = {
      headerTitleStyle: {},
      headerStyle: {
        backgroundColor: color.redColor,
      },
      tabBarIcon: ({ tintColor }) =>
        <FontAwesome name="user" size={25} color={tintColor} />
      ,
    };
    render() {
    return (
      <View>
        <Text>ProfileScreen</Text>
      </View>
    );
  }
}

export default ProfileScreen;
