import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import App from './components/App';
render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('app'));