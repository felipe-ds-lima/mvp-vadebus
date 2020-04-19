import React from "react";
import { TiWarningOutline } from "react-icons/ti";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

import { Container, MapSection, Message, Spots } from "./styles";
import Map from "../../components/Map";
import Menu from "../../components/Menu";
import { Link } from "react-router-dom";
import history from "../../services/history";

export default function PartidaHome() {
  function handleMarkerClick() {
    history.push("/partida/linha");
  }

  return (
    <Container>
      <MapSection>
        <Map onClick={handleMarkerClick} />
      </MapSection>
      <Message>
        <TiWarningOutline />
        <div>
          <h3>Fique em casa</h3>
          <p>Saia só se necessário</p>
        </div>
      </Message>
      <Spots>
        <Link to="/partida/linha">
          <div className="circle star">
            <FaStar />
          </div>
          <div>
            <h3>Rua ABC 1, Nº 111</h3>
            <p>Centro de XPTO, Foo Bar, Brasil</p>
          </div>
        </Link>
        <Link to="/partida/linha">
          <div className="circle">
            <FaMapMarkerAlt />
          </div>
          <div>
            <h3>Rua ABC 1, Nº 111</h3>
            <p>Centro de XPTO, Foo Bar, Brasil</p>
          </div>
        </Link>
        <Link to="/partida/linha">
          <div className="circle">
            <FaMapMarkerAlt />
          </div>
          <div>
            <h3>Rua ABC 1, Nº 111</h3>
            <p>Centro de XPTO, Foo Bar, Brasil</p>
          </div>
        </Link>
        <Link to="/partida/linha">
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
