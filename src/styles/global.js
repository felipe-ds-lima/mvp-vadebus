import { createGlobalStyle } from "styled-components";
import bus from "../assets/bus.jpg";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Nunito', sans-serif;
        box-sizing: border-box;
    }

    html, body, #root {
        width: 100%;
        height: 100vh;
    }

    #root {
        max-width: 600px;
        margin: 0 auto;
        background: linear-gradient(180deg, rgba(108, 139, 245, 0.75) 0%, rgba(112, 0, 255, 0.44) 100%), url(${bus});
        background-size: cover;
        background-position: center;
        display: flex;
        position: relative;
    }

    a {
      text-decoration: none;
      opacity: 0.8;
      font-family: 'Quicksand', sans-serif;

      &:hover {
        opacity: 1;
      }
    }

`;
