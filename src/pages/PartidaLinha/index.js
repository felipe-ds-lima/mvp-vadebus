import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaStar } from "react-icons/fa";

import Menu from "../../components/Menu";

import busIcon from "../../assets/bus-icon.svg";

import { Container, Header, LineList } from "./styles";
import history from "../../services/history";

export default function PartidaLinha() {
  function handleBack() {
    history.goBack();
  }

  return (
    <Container>
      <Header>
        <button type="button" onClick={handleBack}>
          <div>
            <IoIosArrowBack />
            <p>voltar</p>
          </div>
        </button>

        <h2>Rua Xpto, Nº 123</h2>

        <div>
          <FaStar />
        </div>
      </Header>

      <LineList>
        <h2>Linhas que passam neste ponto</h2>
        <h3>Escolha uma:</h3>
        <Link to="/descida">
          <div>
            <img src={busIcon} alt="Ônibus" />
          </div>
          <div>
            <h4>101</h4>
            <p>Centro de xpto</p>
          </div>
        </Link>
        <Link to="/descida">
          <div>
            <img src={busIcon} alt="Ônibus" />
          </div>
          <div>
            <h4>102</h4>
            <p>Centro de xpto</p>
          </div>
        </Link>
        <Link to="/descida">
          <div>
            <img src={busIcon} alt="Ônibus" />
          </div>
          <div>
            <h4>103</h4>
            <p>Centro de xpto</p>
          </div>
        </Link>
      </LineList>

      <Menu active="partida" />
    </Container>
  );
}
