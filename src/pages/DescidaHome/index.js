import React from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

import { Container, MapSection, Spots, Header } from "./styles";
import Map from "../../components/Map";
import Menu from "../../components/Menu";
import { Link } from "react-router-dom";
import history from "../../services/history";
import { IoIosArrowBack } from "react-icons/io";

export default function DescidaHome() {
  function handleMarkerClick() {
    history.push("/partida/horario");
  }

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

        <h2>Escolha o ponto de descida</h2>

        <div>
          <FaStar />
        </div>
      </Header>
      <MapSection>
        <Map onClick={handleMarkerClick} />
      </MapSection>
      <Spots>
        <Link to="/partida/horario">
          <div className="circle star">
            <FaStar />
          </div>
          <div>
            <h3>Rua ABC 1, Nº 111</h3>
            <p>Centro de XPTO, Foo Bar, Brasil</p>
          </div>
        </Link>
        <Link to="/partida/horario">
          <div className="circle">
            <FaMapMarkerAlt />
          </div>
          <div>
            <h3>Rua ABC 1, Nº 111</h3>
            <p>Centro de XPTO, Foo Bar, Brasil</p>
          </div>
        </Link>
        <Link to="/partida/horario">
          <div className="circle">
            <FaMapMarkerAlt />
          </div>
          <div>
            <h3>Rua ABC 1, Nº 111</h3>
            <p>Centro de XPTO, Foo Bar, Brasil</p>
          </div>
        </Link>
        <Link to="/partida/horario">
          <div className="circle">
            <FaMapMarkerAlt />
          </div>
          <div>
            <h3>Rua ABC 1, Nº 111</h3>
            <p>Centro de XPTO, Foo Bar, Brasil</p>
          </div>
        </Link>
      </Spots>
      <Menu active="partida" />
    </Container>
  );
}
