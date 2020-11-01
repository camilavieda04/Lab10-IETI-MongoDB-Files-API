import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import Drawer from "./components/Drawer";
import NewTask from "./components/NewTask";
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';

function App() {
 return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/Login">
            <Login/>
          </Route>
          <Route exact path="/Register">
            <Register/>
          </Route>
          <Route exact path="/Drawer">
            <Drawer />
          </Route>
          <Route exact path="/NewTask">
            <NewTask />
          </Route>
        </Switch>
      </div>
    </Router>
 );
}

export default App;
