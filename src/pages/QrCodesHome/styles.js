import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  > article {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: linear-gradient(
      180deg,
      #27db7e 0%,
      rgba(36, 168, 100, 0.71) 100%
    );
    color: #fff;
    padding-top: 16px;
    padding-bottom: 32px;

    a {
      margin-top: 16px;
      display: flex;
      align-items: center;
      color: #fff;
      font-weight: bold;
      font-size: 20px;
      opacity: 1;

      &.history {
        position: absolute;
        bottom: 8px;
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        font-size: 40px;
        margin-right: 8px;
      }
    }
  }
`;
