import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

import history from "../../services/history";

import Map from "../../components/Map";
import Menu from "../../components/Menu";

import {
  Container,
  MapSection,
  Spots,
  Header,
  Modal,
  Background,
  ModalContent,
  HoursList,
} from "./styles";

export default function PartidaHorario() {
  function handleMarkerClick() {
    history.push("/partida/horario");
  }

  function handleBack() {
    history.goBack();
  }

  return (
    <Container>
      <Modal>
        <Background />
        <ModalContent>
          <h3>Escolher um horário</h3>
          <HoursList>
            <button>5:00</button>
            <button>5:30</button>
            <button>6:00</button>
            <button>6:30</button>
            <button>7:00</button>
            <button>7:30</button>
            <button>8:00</button>
            <button>8:30</button>
            <button>9:00</button>
            <button>9:30</button>
            <button>10:00</button>
            <button>10:30</button>
            <button>11:00</button>
            <button>11:30</button>
            <button>12:00</button>
            <button>12:30</button>
            <button>13:00</button>
            <button>13:30</button>
            <button>14:00</button>
            <button>14:30</button>
            <button>15:00</button>
            <button>15:30</button>
            <button>16:00</button>
            <button>16:30</button>
            <button>17:00</button>
            <button>17:30</button>
            <button>18:00</button>
            <button>18:30</button>
            <button>19:00</button>
            <button>19:30</button>
            <button>20:00</button>
            <button>20:30</button>
            <button>21:00</button>
            <button>21:30</button>
            <button>22:00</button>
            <button>22:30</button>
            <button>23:00</button>
            <button>23:30</button>
          </HoursList>
        </ModalContent>
      </Modal>

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
