import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaRegMoneyBillAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosClose } from "react-icons/io";

import history from "../../services/history";

import Map from "../../components/Map";
import Menu from "../../components/Menu";

import bom from "../../assets/bom.svg";
import unico from "../../assets/bilhete-unico.svg";

import {
  Container,
  MapSection,
  Spots,
  Header,
  Modal,
  Background,
  ModalContent,
  PaymentList,
} from "./styles";

export default function PartidaPagamento() {
  function handleMarkerClick() {
    history.push("/partida/confirmacao");
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
          <h3>
            Escolher um método <br /> de pagamento
          </h3>
          <PaymentList>
            <button type="button" onClick={handleMarkerClick}>
              <div>
                <FaRegMoneyBillAlt color="#27DB7E" />
              </div>
              <p>Dinheiro</p>
            </button>
            <button type="button" onClick={handleMarkerClick}>
              <div>
                <img src={bom} alt="BOM" />
              </div>
              <p>Cartão BOM</p>
            </button>
            <button type="button" onClick={handleMarkerClick}>
              <div>
                <img src={unico} alt="Bilhete Único" />
              </div>
              <p>Bilhete Único</p>
            </button>
          </PaymentList>
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
