import React from 'react';
import './assets/scss/base.scss';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'

import MainScreen from './components/main-screen/MainScreen'

import Login from './components/login/Login';

function App() {
  return (
    <>
      <Router>
        <Route path="/"  render={(props) => <MainScreen {...props} />} />

        <Route path="/login" exact render={(props) => <Login {...props} />} />
      </Router>
    </>
  );
}

export default App;
