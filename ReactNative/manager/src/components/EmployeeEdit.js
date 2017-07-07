import _ from 'lodash';
import React, { Component } from 'react';
import {Card, CardSection, Button} from './commons';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import EmployeeForm from './employeeForm';
import {Actions} from 'react-native-router-flux';
import {employeeUpdate, employeeSave} from '../actions';

class EmployeeEdit extends Component {
    state = {  }
    componentWillMount() {
        // console.log('this.props.employee from edit =', this.props.employee)
        _.each(this.props.employee, (value, prop)=> {
            this.props.employeeUpdate({prop, value})
        })
    }
    onSaveChagePress() {
        const {name, phone, shift, employeeSave} = this.props;
        employeeSave({ name, phone, shift, uid: this.props.employee.uid});
    }
    render() {
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button
                        onPress = {this.onSaveChagePress.bind(this)}
                    >
                        Save Changes
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift} = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProps,{ 
    employeeUpdate,
    employeeSave
})(EmployeeEdit);