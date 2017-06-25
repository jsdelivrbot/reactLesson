import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import color from '../../constants/colors';

class NotificationScreen extends Component {
    state = {  }
    static navigationOptions  = {
    headerTitleStyle:{},
    headerStyle: {
      backgroundColor: color.redColor,
    },
    tabBarIcon: ({tintColor}) =>
      <Ionicons name="ios-notifications" size={25} color={ tintColor } />
    ,
  };
    render() {
        return (
            <View style = {{ flex: 1 }}>
                <Text>Notifications</Text>
            </View>
        );
    }
}

export default NotificationScreen;
