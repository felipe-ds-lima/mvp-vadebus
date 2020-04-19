import React from "react";
import { Form, Input } from "@rocketseat/unform";

import logo from "../../assets/logo.svg";

import { Container } from "./styles";

export default function AuthLogin() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <Form>
        <Input name="email" placeholder="Seu e-mail" type="text" />
        <Input name="password" placeholder="Sua senha" type="text" />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}
