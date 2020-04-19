import React from "react";
import { Form, Input } from "@rocketseat/unform";

import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow-left.svg";

import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function AuthRegister() {
  function handleSubmit(data) {}
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Seu nome completo" type="text" />
        <Input name="cpf" placeholder="Seu CPF" type="text" />
        <Input name="email" placeholder="Seu e-mail" type="email" />
        <Input name="password" placeholder="Sua senha" type="password" />
        <button type="submit">Cadastrar</button>
        <Link to="/" className="fluid">
          <img src={arrow} alt="arrow-left" className="arrow-left" />
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  );
}
