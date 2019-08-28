import { createGlobalStyle } from "./typed-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    html, body {
        padding: 0;
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    }
    ul, li, a {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    a { 
        color: inherit;
        text-decoration: none;
    }
`;