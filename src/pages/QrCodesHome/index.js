import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineQrcode } from "react-icons/ai";

import Menu from "../../components/Menu";

import { Container } from "./styles";

export default function QrCodesHome() {
  return (
    <Container>
      <article>
        <h2>QR Codes ativos</h2>
        <Link to="/qr-codes/qr-code">
          <div>
            <AiOutlineQrcode />
          </div>
          <p>Rua Xpto - 8:30</p>
        </Link>
        <Link to="/qr-codes/qr-code">
          <div>
            <AiOutlineQrcode />
          </div>
          <p>Rua Xpto - 8:30</p>
        </Link>
      </article>
      <Menu active="qr-codes" />
    </Container>
  );
}
