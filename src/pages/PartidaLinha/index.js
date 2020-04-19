import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaStar } from "react-icons/fa";

import Menu from "../../components/Menu";

import busIcon from "../../assets/bus-icon.svg";

import { Container, Header, LineList } from "./styles";

export default function PartidaLinha() {
  return (
    <Container>
      <Header>
        <div>
          <IoIosArrowBack />
          <p>voltar</p>
        </div>
        <div>
          <FaStar />
        </div>
      </Header>

      <LineList>
        <Link to="/descida">
          <div>
            <img src={busIcon} alt="Ônibus" />
          </div>
          <div>
            <h3>101</h3>
            <p>Centro de xpto</p>
          </div>
        </Link>
        <Link to="/descida">
          <div>
            <img src={busIcon} alt="Ônibus" />
          </div>
          <div>
            <h3>102</h3>
            <p>Centro de xpto</p>
          </div>
        </Link>
        <Link to="/descida">
          <div>
            <img src={busIcon} alt="Ônibus" />
          </div>
          <div>
            <h3>103</h3>
            <p>Centro de xpto</p>
          </div>
        </Link>
      </LineList>

      <Menu active="partida" />
    </Container>
  );
}
