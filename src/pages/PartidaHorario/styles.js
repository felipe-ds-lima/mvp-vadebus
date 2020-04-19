import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MapSection = styled.section`
  width: 100%;
  height: 40%;
  position: relative;
`;

export const Spots = styled.section`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #f8f7fd;
  padding: 16px;
  overflow-y: auto;

  a {
    display: flex;
    padding: 8px 0;
    border-bottom: 1px solid #ddd;
    color: #222;

    .circle {
      width: 48px;
      height: 48px;
      margin-right: 8px;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32px;
      color: #f8f7fd;
      background-color: #c4c4c4;

      &.star {
        background-color: #ffe03c;
      }
    }
  }
`;

export const Header = styled.section`
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: none;
    border: none;
  }

  h2 {
    color: #f8f7fd;
    font-size: 20px;
  }

  div {
    height: 56px;
    width: 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: #fff;

    p {
      font-size: 12px;
    }
  }
`;

export const Modal = styled.section`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 64px;
  background-color: #20202080;
  z-index: 1;
`;

export const Background = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: none;
  background: none;
`;

export const ModalContent = styled.section`
  background-color: #f8f7fd;
  border-radius: 4px;
  padding: 8px;
  color: #333;
  margin: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin-bottom: 16px;
  }
`;

export const HoursList = styled.section`
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-height: 270px;
  overflow-y: auto;

  button {
    font-size: 16px;
    font-weight: bold;
    background: none;
    border: none;
    padding: 16px;
    width: 50%;
  }
`;
