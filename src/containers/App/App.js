import React, {Component} from 'react';
import {Switch, Route} from 'react-router'
import {Router} from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

import './App.css';

import PersonList from '../../components/PersonList'
import PersonInput from '../../components/PersonInput'
import Weather from '../../components/Weather'
import Form from '../../components/Form'

import Home from "../Home";
import Registration from "../Registration";
import Login from "../Login";
const history = createBrowserHistory()
const API_KEY= "c318a9a8eb7ccbb5ebca30e7240f5404";

class App extends Component {

    gettingWeather = async (e) =>{
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_url = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        console.log(data);
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/home" component={Home}/>
                        <Route path="/registration" component={Registration}/>
                        <Route path="/login" component={Login}/>
                        <Route component={() => <span>404</span>}/>
                    </Switch>
                </Router>

                <PersonInput/>
                <PersonList/>
                <Form weatherMethod={this.gettingWeather} />
                <Weather/>

            </div>
        );
    }
}

export default App;
