import React, {Component} from 'react';
import { Switch, Route } from 'react-router'


import Home from "../Home";
import Checkin from "../Checkin";
import Auth from "../Auth";

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Switch>
            <Route exact path="/Home" component={Home}/>
            <Route path="/Checkin" component={Checkin}/>
            <Route path="/Auth" component={Auth}/>
            <Route component={()=><span>404</span>}/>
          </Switch>
          <Footer/>
        </div>
    );
  }
}

export default App;
