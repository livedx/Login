import React from 'react';
import ReactDOM from 'react-dom';
import './static/index.css';
import './static/style';
import { Router } from "react-router";
import App from './containers/App/App';
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory()



ReactDOM.render( <Router history={history}>
    <App/>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA