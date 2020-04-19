import React from "react";
import { Route, Switch } from "react-router-dom";

import AuthLogin from "./pages/AuthLogin";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={AuthLogin} />
    </Switch>
  );
}
