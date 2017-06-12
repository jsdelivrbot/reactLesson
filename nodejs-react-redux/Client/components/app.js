import React from 'react';
import Greetings from './greeting';
import NavigationBar from './NavigationBar';
import {Match, Route, Switch} from 'react-router-dom';

import Routes from './routes';
class App extends React.Component {
    render() {
        return (
            <div className="container">
                <NavigationBar></NavigationBar>
                <Routes/>
            </div>
        );
    }
}

export default App;