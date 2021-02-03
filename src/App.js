import React from 'react';
import './assets/scss/base.scss';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'

import MainScreen from './components/main-screen/MainScreen'
import Signup from "./components/signup/Singup"
import Login from './components/login/Login';

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact render={(props) => <MainScreen {...props} />} />

        <Route path="/login" exact render={(props) => <Login {...props} />} />
      </Router>
    </>
  );
}

export default App;
