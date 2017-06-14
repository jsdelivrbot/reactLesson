import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import {store} from './example';
import {Provider} from 'react-redux';
render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app')
    );

