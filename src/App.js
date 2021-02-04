import React from 'react';
import './assets/scss/base.scss';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'

import MainScreen from './components/main-screen/MainScreen'
<<<<<<< HEAD

=======
>>>>>>> 5dac6d23c5e2d380bc86a4c6f0c6f071e374975b
import Login from './components/login/Login';

function App() {
  return (
    <>
      <Router>
        <Route path="/"  render={(props) => <MainScreen {...props} />} />

        <Route path="/login" render={(props) => <Login {...props} />} />
      </Router>
    </>
  );
}

export default App;
