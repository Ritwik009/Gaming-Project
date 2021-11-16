import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Login from "./Components/Login";

import Features from "./Components/Features";
import Elements from "./Components/Elements";
import MoreDeets from "./Components/MoreDeets";

import NavBar from "./Components/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
 

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/features" component={Features}>
              <Features />
              
          </Route>
          <Route path="/elements" component={Elements}>
            <Elements />
          </Route>
          <Route path="/deets" component={MoreDeets}>
            <MoreDeets />
          </Route>
          <Route path="/login" component={Login}>
            <Login />
          </Route>
        </Switch>
    </Router>

    </div>
  );
}

export default App;
