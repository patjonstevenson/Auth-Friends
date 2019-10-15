import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import FriendsForm from "./components/FriendsForm";
import LoginForm from "./components/LoginForm";
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';


function App() {
  return (
    <div className="App">
      <h1>Friends</h1>

      <Router>
        <Link to="/login">Login</Link>
        <Switch>
          <PrivateRoute path="/friends" component={Friends} />
          <Route path="/login" component={LoginForm} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
