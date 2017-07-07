import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { Card, CardSection, Button } from './commons';
import {connect} from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './employeeForm';

class EmployeeCreate extends Component {
    state = {  }
    onCreatePressed(){
        const { name, phone, shift, employeeCreate} = this.props;
        employeeCreate({name, phone, shift: shift || '2'});
    }
    render() {
        
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                     <Button  onPress = {this.onCreatePressed.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift }
};

export default connect(mapStateToProps, { 
    employeeUpdate,
    employeeCreate
 })(EmployeeCreate);