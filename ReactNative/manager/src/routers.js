import React, { Component } from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import EmployeeList from './components/employeeList';
import EmployeeCreate from './components/employeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = ()=> {
    return (
        <Router sceneStyle = {{ paddingTop: 65 }} >
            <Scene key = "auth">
                <Scene key = "login" component = {LoginForm} title = "Please login" />
            </Scene>
            <Scene key = "main">
                <Scene 
                    rightTitle = "Add"
                    onRight = { ()=>Actions.employeeCreate() }
                    key = "employeeList" 
                    component = {EmployeeList} 
                    title = "Employees" 
                    initial
                />
                <Scene 
                    key = "employeeCreate" 
                    component = {EmployeeCreate} 
                    title = "create new Employee" 
                />
                <Scene 
                    key = "EmployeeEdit" 
                    component = {EmployeeEdit} 
                    title = "Edit Employee" 
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent