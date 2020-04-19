import React from "react";

import success from "../../assets/success.svg";

import { Container } from "./styles";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu";

export default function PartidaConfirmation() {
  return (
    <Container>
      <article>
        <div>
          <img src={success} alt="Sucesso" />
          <h2>Tudo certo!</h2>
        </div>

        <Link to="/qr-codes/qr-code">
          O QR Code pode ser visualizado <u>clicando aqui</u>
        </Link>

        <p>Esteja na Rua XPTO as 8:30 para Rua XPTO II</p>
      </article>
      <Menu active="partida" />
    </Container>
  );
}
