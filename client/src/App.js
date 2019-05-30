import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import  MainStateProvider  from './MainStateProvider';
import { ProtectedRoute } from './components/ProtectedRoute';
import { NavBar } from './style';

const Links = () =>  (
  <NavBar>
    <Link to="/">Home </Link>
    <Link to="/register">Register </Link>
    <Link to="/login">Login </Link>
    <Link to="/profile">Profile</Link>
  </NavBar>
)

class App extends Component{
  render() {
    return (
      <Router>
        <MainStateProvider>
            <div>
              <Links />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <ProtectedRoute exact path="/profile" component={Profile} />
                <Route path="*" component={() => '404 NOT FOUND'} />
              </Switch>
            </div>
        </MainStateProvider>   
      </Router>
    );
  }
}
export default App;
