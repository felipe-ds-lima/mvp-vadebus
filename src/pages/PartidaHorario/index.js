import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosClose } from "react-icons/io";

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
    history.push("/partida/pagamento");
  }

  function handleBack() {
    history.goBack();
  }

  return (
    <Container>
      <Modal>
        <Background />
        <ModalContent>
          <button className="close">
            <IoIosClose />
          </button>
          <h3>Escolher um horário</h3>
          <HoursList>
            <button type="button" onClick={handleMarkerClick}>
              5:00
            </button>
            <button type="button" onClick={handleMarkerClick}>
              5:30
            </button>
            <button type="button" onClick={handleMarkerClick}>
              6:00
            </button>
            <button type="button" onClick={handleMarkerClick}>
              6:30
            </button>
            <button type="button" onClick={handleMarkerClick}>
              7:00
            </button>
            <button type="button" onClick={handleMarkerClick}>
              7:30
            </button>
            <button type="button" onClick={handleMarkerClick}>
              8:00
            </button>
            <button type="button" onClick={handleMarkerClick}>
              8:30
            </button>
            <button type="button" onClick={handleMarkerClick}>
              9:00
            </button>
            <button type="button" onClick={handleMarkerClick}>
              9:30
            </button>
            <button type="button" onClick={handleMarkerClick}>
              10:00
            </button>
            <button type="button" onClick={handleMarkerClick}>
              10:30
            </button>
            <button type="button" onClick={handleMarkerClick}>
              11:00
            </button>
            <button type="button" onClick={handleMarkerClick}>
              11:30
            </button>
            <button type="button" onClick={handleMarkerClick}>
              12:00
            </button>
            <button type="button" onClick={handleMarkerClick}>
              12:30
            </button>
            <button type="button" onClick={handleMarkerClick}>
              13:00
            </button>
            <button type="button" onClick={handleMarkerClick}>
              13:30
            </button>
            <button type="button" onClick={handleMarkerClick}>
              14:00
            </button>
            <button type="button" onClick={handleMarkerClick}>
              14:30
            </button>
            <button type="button" onClick={handleMarkerClick}>
              15:00
            </button>
            <button type="button" onClick={handleMarkerClick}>
              15:30
            </button>
            <button type="button" onClick={handleMarkerClick}>
              16:00
            </button>
            <button type="button" onClick={handleMarkerClick}>
              16:30
            </button>
            <button type="button" onClick={handleMarkerClick}>
              17:00
            </button>
            <button type="button" onClick={handleMarkerClick}>
              17:30
            </button>
            <button type="button" onClick={handleMarkerClick}>
              18:00
            </button>
            <button type="button" onClick={handleMarkerClick}>
              18:30
            </button>
            <button type="button" onClick={handleMarkerClick}>
              19:00
            </button>
            <button type="button" onClick={handleMarkerClick}>
              19:30
            </button>
            <button type="button" onClick={handleMarkerClick}>
              20:00
            </button>
            <button type="button" onClick={handleMarkerClick}>
              20:30
            </button>
            <button type="button" onClick={handleMarkerClick}>
              21:00
            </button>
            <button type="button" onClick={handleMarkerClick}>
              21:30
            </button>
            <button type="button" onClick={handleMarkerClick}>
              22:00
            </button>
            <button type="button" onClick={handleMarkerClick}>
              22:30
            </button>
            <button type="button" onClick={handleMarkerClick}>
              23:00
            </button>
            <button type="button" onClick={handleMarkerClick}>
              23:30
            </button>
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
