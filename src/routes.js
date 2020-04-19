import React from "react";
import { Route, Switch } from "react-router-dom";

import AuthLogin from "./pages/AuthLogin";
import AuthRegister from "./pages/AuthRegister";
import AuthPassword from "./pages/AuthPassword";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={AuthLogin} />
      <Route path="/register" component={AuthRegister} />
      <Route path="/redefinir" component={AuthPassword} />
    </Switch>
  );
}
