import React from "react";
import SignUp from "../screens/signUp/SignUp";
import SignIn from "../screens/signIn/SignIn";
import CheckEmail from "../screens/checkEmail/CheckEmail";
import SetPassword from "../screens/setPassword/SetPassword";
import About from "../screens/about/About";
import AccountCreated from "../screens/accountCreated/AccountCreated";
import Location from "../screens/location/Location";

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
        <Route exact path="/location" component={Location} />
      </Switch>
    </BrowserRouter>
  );
}
