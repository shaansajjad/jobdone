import React from "react";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";

import { Switch, Route, BrowserRouter } from "react-router-dom";

export default function RouterPage() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/sign_in" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}
