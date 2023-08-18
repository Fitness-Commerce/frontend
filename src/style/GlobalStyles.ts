import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    html * {
        box-sizing: border-box;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    }
    body {
        margin-top: 10vh;
    }
`;

export default GlobalStyles;