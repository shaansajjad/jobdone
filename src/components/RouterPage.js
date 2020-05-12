import React from "react";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import CheckEmail from "../screens/CheckEmail";
import SetPassword from "../screens/SetPassword";
import About from "../screens/About";
import AccountCreated from "../screens/AccountCreated";

import { Switch, Route, BrowserRouter } from "react-router-dom";

export default function RouterPage() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/sign_in" component={SignIn} />
        <Route exact path="/check-mail" component={CheckEmail} />
        <Route exact path="/set-password" component={SetPassword} />
        <Route exact path="/about" component={About} />
        <Route exact path="/created" component={AccountCreated} />
      </Switch>
    </BrowserRouter>
  );
}
