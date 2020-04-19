import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  > article {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(
      180deg,
      #27db7e 0%,
      rgba(36, 168, 100, 0.71) 100%
    );
    color: #fff;

    a {
      color: #fff;
      font-size: 24px;
      line-height: 1.4;
      text-align: center;
      font-weight: bold;
      opacity: 1;
      padding: 16px;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    p {
      font-size: 20px;
      font-weight: bold;
      max-width: 300px;
      text-align: center;
      padding: 16px;
    }
  }
`;
