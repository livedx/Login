import React, {Component} from 'react';
import {Switch, Route} from 'react-router'
import {Router} from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { store , persistor } from '../../store/Store'
import './App.css';


import Home from "../Home";
import Registration from "../Registration";
import Login from "../Login";
const history = createBrowserHistory()


class App extends Component {
    render() {
        return (<Provider store={store}>
            <PersistGate persistor={persistor}>
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/home" component={Home}/>
                        <Route path="/registration" component={Registration}/>
                        <Route path="/login" component={Login}/>
                        <Route component={() => <span>404</span>}/>
                    </Switch>
                </Router>
            </div> </PersistGate>
            </Provider>
        );
    }
}

export default App;
