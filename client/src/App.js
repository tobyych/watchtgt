import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';
import Home from './Home';
import Room from './Room';

class App extends Component {
  render() {
    return (
      <Router>
        <div class='base-layout'>
          <nav className="navbar">
            <ul>
              <Link className="link" to="/">Home</Link>
              <Link className="link" to="/about">About</Link>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/room">
              <Room />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function About() {
  return <h2>About</h2>;
}

export default App;
