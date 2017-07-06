import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './commons';
import {connect} from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
    state = {  }
    render() {
        const {name, phone, shift, employeeUpdate} = this.props;
        return (
            <Card>
                <CardSection>
                    <Input
                        label = "Name"
                        placeholder = "Nguyen"
                        value = {name}
                        onChangeText = {text=> employeeUpdate({ prop: "name", value: text })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label = "phone"
                        placeholder = "0916678845"
                        value = {phone}
                        onChangeText = { text=> employeeUpdate({ prop: "phone", value: text }) }
                    />
                </CardSection>
                    
                <CardSection  style = {{ flexDirection: 'column' }}>
                   <Text style = {styles.pickerStyle} >Shift</Text>
                    <Picker
                        style = {{ flex: 1 }}
                        selectedValue = {shift}
                        onValueChange = { day => employeeUpdate({ prop: "shift", value: day })}
                    >
                        <Picker.Item label = "Thứ 2" value = "2" />
                        <Picker.Item label = "Thứ 3" value = "3" />
                        <Picker.Item label = "Thứ 4" value = "4" />
                        <Picker.Item label = "Thứ 5" value = "5" />
                        <Picker.Item label = "Thứ 6" value = "6" />
                        <Picker.Item label = "Thứ 7" value = "7" />
                        <Picker.Item label = "Chủ Nhật" value = "8" />
                    </Picker>
                </CardSection>
                <CardSection>
                     <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
const styles = {
    pickerStyle: {
        paddingLeft: 20,
        fontSize: 18,
        paddingBottom: 20
    }
}
const mapStateToProps = (state, ownProps) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift }
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);