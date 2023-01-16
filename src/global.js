import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #f1f1f1;
        font-family: 'Josefin Sans', sans-serif;

        &::selection {
            background-color: #FCC92B;
            color: #0e0e0e;
        }
    }

    * {
    scrollbar-width: thin;
    scrollbar-color: #0e0e0e;
  }
  
  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }
  
  *::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: #0e0e0e;
    border-radius: 20px;
    border: 1px solid #0e0e0e;
  }
`;

export default GlobalStyle;
