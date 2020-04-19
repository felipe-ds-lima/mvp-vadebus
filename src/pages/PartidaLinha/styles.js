import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.section`
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

export const LineList = styled.section`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #f8f7fd;

  a {
    display: flex;

    div {
      margin-right: 8px;
    }
    border-bottom: 1px solid #ddd;
  }
`;
