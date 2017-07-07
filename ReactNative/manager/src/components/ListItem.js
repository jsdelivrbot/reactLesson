import React, { Component } from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from './commons';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
    state = {  }
    onRowPressed() {
        console.log("this.props.employee", this.props.employee);
        Actions.EmployeeEdit({ employee: this.props.employee });
    }
    render() {
        const { name } = this.props.employee;
        return (
            <TouchableWithoutFeedback
                onPress = {this.onRowPressed.bind(this)}
            >
                <View>
                    <CardSection>
                        <Text style = {styles.titleStyle} >
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem;