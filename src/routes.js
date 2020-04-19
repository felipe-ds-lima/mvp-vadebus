import React from "react";
import { Route, Switch } from "react-router-dom";

import AuthLogin from "./pages/AuthLogin";
import AuthRegister from "./pages/AuthRegister";
import AuthPassword from "./pages/AuthPassword";
import PartidaHome from "./pages/PartidaHome";
import PartidaLinha from "./pages/PartidaLinha";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={AuthLogin} />
      <Route path="/register" component={AuthRegister} />
      <Route path="/redefinir" component={AuthPassword} />
      <Route path="/partida" exact component={PartidaHome} />
      <Route path="/partida/linha" component={PartidaLinha} />
    </Switch>
  );
}
