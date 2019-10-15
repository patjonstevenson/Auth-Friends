import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import FriendsForm from "./components/FriendsForm";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';


function App() {
  return (
    <div className="App">
      <h1>Friends</h1>

      <Router>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/friends">Friends</Link>
          <Link to="/logout">Logout</Link>
        </nav>
        <Switch>
          <PrivateRoute path="/friends" component={Friends} />
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
