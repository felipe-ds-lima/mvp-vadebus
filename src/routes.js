import React from "react";
import { Route, Switch } from "react-router-dom";

import AuthLogin from "./pages/AuthLogin";
import AuthRegister from "./pages/AuthRegister";
import AuthPassword from "./pages/AuthPassword";
import PartidaHome from "./pages/PartidaHome";
import PartidaLinha from "./pages/PartidaLinha";
import DescidaHome from "./pages/DescidaHome";
import PartidaHorario from "./pages/PartidaHorario";
import PartidaPagamento from "./pages/PartidaPagamento";
import PartidaConfirmation from "./pages/PartidaConfirmation";
import QrCodesHome from "./pages/QrCodesHome";
import QrCodesCode from "./pages/QrCodesCode";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={AuthLogin} />
      <Route path="/register" component={AuthRegister} />
      <Route path="/redefinir" component={AuthPassword} />
      <Route path="/partida" exact component={PartidaHome} />
      <Route path="/partida/linha" component={PartidaLinha} />
      <Route path="/descida" component={DescidaHome} />
      <Route path="/partida/horario" component={PartidaHorario} />
      <Route path="/partida/pagamento" component={PartidaPagamento} />
      <Route path="/partida/confirmacao" component={PartidaConfirmation} />

      <Route path="/qr-codes" exact component={QrCodesHome} />
      <Route path="/qr-codes/qr-code" exact component={QrCodesCode} />
    </Switch>
  );
}
