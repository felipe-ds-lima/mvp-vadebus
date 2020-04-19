import React from "react";
import { Form, Input } from "@rocketseat/unform";

import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow-left.svg";

import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function AuthPassword() {
  function handleSubmit(data) {}

  return (
    <Container>
      <img src={logo} alt="Logo" />
      <Form onSubmit={handleSubmit}>
        <Input name="password" placeholder="Sua senha" type="text" />
        <Input
          name="confirm-password"
          placeholder="Confirme sua senha"
          type="password"
        />
        <button type="submit">Redefinir senha</button>
        <Link to="/" className="fluid">
          <img src={arrow} alt="arrow-left" className="arrow-left" />
          Voltar
        </Link>
      </Form>
    </Container>
  );
}
