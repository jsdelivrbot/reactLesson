import React from 'react';
import Greetings from './greeting';
import NavigationBar from './NavigationBar';
import {Match, Route} from 'react-router-dom';
import Greeting from './greeting';
import Test from './test';
class App extends React.Component {
    render() {
        return (
            <div className="container">
                <NavigationBar></NavigationBar>
                <Route path = '/home' component = {Greeting}/>
                <Route path = '/test' component = {Test}/>
            </div>
        );
    }
}

export default App;