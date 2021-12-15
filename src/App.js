import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Redirect from="/" to="signup"/>
      </Switch>
  
    </div>
  );
};

export default App;
