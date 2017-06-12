import React from 'react';
import { Route, Switch  } from 'react-router-dom';
// import {  } from 'react-router';
import App from './App';
import Greeting from './greeting';
import Signup from './signup';
import Login from './Login';
export default ()=>{
    return (
        <Switch>
            <Route exact path = '/' component = {Greeting}/>
            <Route path = '/signup' component = {Signup}/>
            <Route path = '/login' component = {Login}/>
            <Route render = {()=>{
                return <h2>Không tìm thấy trang bạn yêu cầu</h2>
                } }/>
        </Switch>
    );
}

