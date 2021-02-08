import React from "react";
import "./assets/scss/base.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainScreen from "./components/main-screen/MainScreen";
import Login from "./components/login/Login";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" exact component={Login} />
          <Route path="/" component={MainScreen} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
