import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: #f8f7fd;
    font-size: 12px;
  }

  .new-account {
    position: absolute;
    bottom: 16px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 16px;

    input {
      background-color: rgba(0, 0, 0, 0.35);
      border-radius: 4px;
      border: none;
      height: 40px;
      width: 100%;
      margin-bottom: 16px;
      color: #f8f7fd;
      font-size: 16px;
      padding: 0 16px;
      line-height: 40px;

      ::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      background-color: #048ddb;
      border-radius: 4px;
      border: none;
      height: 40px;
      width: 100%;
      margin-bottom: 16px;
      color: #f8f7fd;
      font-weight: bold;
    }
  }
`;
