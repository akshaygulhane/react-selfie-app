import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Login from './Login';
import Services from './Services';
import Register from './Register';
import Eventbrite from './Eventbrite';

import Sidenav from './Sidenav';

import './../styles/App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="container row">
        <div className="col-md-2">
        <Sidenav/>
        </div>  
        <div className="col-md-10 col-md-offset-2">
        <h1 className="text-center">React Selfie App</h1>
        <hr />  
          <div className="content">
            <Route exact path="/" component={Services}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/eventbrite" component={Eventbrite}/>
            <Route path="/facebook" component={Eventbrite}/>
          </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
