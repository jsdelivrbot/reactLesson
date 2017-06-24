import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { MeetupApi } from '../../constants/api';
import styles from './styles/HomeScreen';

class HomeScreen extends Component {
    state = {}
    render(){
        console.log("styles.root", styles.root);
        return(
            <View style = {styles.root}>
                <Text>HomeScreen</Text>
            </View>
        );
    }
}
export default HomeScreen;

