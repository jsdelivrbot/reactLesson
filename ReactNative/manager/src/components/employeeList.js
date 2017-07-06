import _ from 'lodash';
import React, { Component } from 'react';
import {View, Text, ListView} from 'react-native';
import {Card, CardSection} from './commons';
import {connect} from 'react-redux';
import {employeeFetch} from '../actions/';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeeFetch();
        this.createDataSource(this.props)
        
    }
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }
    createDataSource ({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2)=> r1 !== r2
        });

        this.DataSource = ds.cloneWithRows(employees)
    }
    renderRow(employee) {
        return (
            <ListItem employee = {employee}  />
        )
    }
    state = {  }
    render() {
        console.log(this.props);
        return (
            <ListView 
                enableEmptySections
                dataSource = {this.DataSource}
                renderRow = {this.renderRow}
            />
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state.employeeList)
    const employees = _.map(state.employeeList, (val, uid)=> {
        return {...val, uid}
    })
    return { employees }
};
export default connect(mapStateToProps, {
    employeeFetch
})(EmployeeList);