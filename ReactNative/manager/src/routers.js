import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import EmployeeList from './components/employeeList';
const RouterComponent = ()=> {
    return (
        <Router sceneStyle = {{ paddingTop: 65 }} >
            <Scene key = "login" component = {LoginForm} title = "Please login" ></Scene>
            <Scene key = "employeeList" component = {EmployeeList} title = "Employees" ></Scene>
        </Router>
    );
};

export default RouterComponent