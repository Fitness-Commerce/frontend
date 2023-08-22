import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    :root {
        /* color */
        --color-white-primary: rgb(233,233,233);
        --color-black-primary: rgb(34,34,34);
        --color-bright-black: rgb(50,50,50);
        --color-gray: rgb(210,210,210);
        --color-accent-bright-green: rgba(213, 243, 231);
        --color-accent-dark-green: rgb(19, 189, 126);
        --color-accent-blue: #47a1e5;

        /* button */
        --button-radius: 8px;
        --color-button-hover: rgb(56,56,56);
        --color-button-bg-black: var(--color-black-primary);
        
        /* header height */
        --header-height: 8vh;
    }
    html * {
        box-sizing: border-box;
        font-family: 'Noto Sans Kr', 'sans-serif';
    }
    body {
        margin-top: 10vh;
    }
`;

export default GlobalStyles;