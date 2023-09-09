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
        --color-opacity-white: rgba(255,255,255, 0.1);
        --color-profile-bg-white: rgb(248, 248, 248);

        /* text */
        --text-size-small: 12px;
        --text-size-primary: 16px;
        --text-size-medium: 18px;
        --text-size-semiLarge: 20px;
        --text-size-large: 24px;
        
        /* button */
        --button-radius: 8px;
        --color-button-bg-hover: rgb(56,56,56);
        --color-button-bg-black: var(--color-black-primary);
        
        /* modal */
        --modal-radius: 10px;

        /* label */
        --label-color: #a7a7a7;
        --label-text-size: var(--text-size-small);
        --label-font-weight: 300;

        /* input */
        --height-input: 48px;

        /* header height */
        --header-height: 8vh;

        /* padding */
        --padding-default: 16px;
    }
    html * {
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
    }
    body {
        color: var(--color-black-primary);
        background-color: var(--color-white-primary);
        background-color: var(--color-profile-bg-white);
        
        /* input type number일 때 증감 버튼을 비활성화 */
        input::-webkit-inner-spin-button {
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
        }

        .box-shadow-default {
            border: 1.5px solid var(--color-black-primary);
            border-radius: 12px;
            padding: var(--padding-default);
            box-shadow: 0 0 5px .1px;
        }
        .logo {
            width: 25px;
            margin-right: 10px;
        }
        
    }
    a {
        text-decoration: none;
        color: var(--color-black-primary);
    }
    
`;

export default GlobalStyles;