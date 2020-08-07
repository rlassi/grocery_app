import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        color: black;
    }

    a.active {
        color: black;
    }

    h1, h2, h3, h4, h5, h6 {
        margin-bottom: 1rem;
        margin-top: 0;
        padding: 0;
    }
`;