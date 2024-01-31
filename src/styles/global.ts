import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        border: 0;
    }

    :focus {
        outline: 0;
    }

    body {
        background: ${(props) => props.theme.bg};
        color: ${(props) => props.theme['base-text']};
    }

    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'Baloo 2', sans-serif;
        color: ${(props) => props.theme['base-title']};
    }

    h2 {
        color: ${(props) => props.theme['base-subtitle']};
    }
`
