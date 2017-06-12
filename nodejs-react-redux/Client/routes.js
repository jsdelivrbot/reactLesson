import React from 'react';
import { Route, IndexRoute  } from 'react-router-dom';
// import {  } from 'react-router';
import App from './components/App';
import Greetings from './components/greeting';
import Test from './components/test';
export default ()=>{
    return (
        <Route path="/" component={App}>
            <Route path = "/test" component= {Test} />
            <Route path = "/greeting" component= {Greetings} />
        </Route>
    );
}

