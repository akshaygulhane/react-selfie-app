import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Login from './components/Login';
import Services from './components/Services';

import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="container">
        <h1 className="text-center">React Selfie App</h1>
        <hr />
        <div>
          <ul className="header">
            <li><NavLink to="/">Services</NavLink></li>
            <li><NavLink to="/eventbrite">Eventbrite</NavLink></li>
            <li><NavLink to="/facebook">Facebook</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Services}/>
            <Route path="/eventbrite" component={Login}/>
            <Route path="/facebook" component={Login}/>
          </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
