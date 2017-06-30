import React, { Component } from 'react';
import {Header} from './components/commons';
import {View, Text} from 'react-native';

class Main extends Component {
    state = {  }
    render() {
        return (
            <View>
                <Header headerText = {'Authentication'} />
            </View>
        );
    }
}

export default Main;