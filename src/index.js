import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import store from './store'
import mock from './mock'
//判断环境变量
if (process.env.NODE_ENV === 'development') {
    mock()
}
ReactDOM.render(
    <Provider store={store}>
        <Router><App /></Router>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
