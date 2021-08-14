import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        padding : 0;
        margin : 0;
        outline : none;
        box-sizing : border-box;
        font-family : sans-serif;
    }
    body #root{
        width: 100vw;
        height: 100vh;

        background-color: ${props => props.theme.bodyBg}
    }
`