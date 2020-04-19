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

export const Message = styled.section`
  width: 100%;
  height: 56px;
  background-color: #7000ff;
  display: flex;
  align-items: center;
  padding: 0 16px 0;
  font-size: 40px;
  color: #f8f7fd;

  div {
    margin-left: 8px;
  }

  h3 {
    font-size: 16px;
  }

  p {
    font-size: 12px;
  }
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
