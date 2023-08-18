import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
  ::before,
  ::after {
    box-sizing: border-box;
    line-height: 1.5;
    background-repeat: no-repeat;
  }

  ::before,
  ::after {
    text-decoration: inherit;
    vertical-align: inherit;
  }


  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    background-color: #f5f5f5;
       color: #141414;
       cursor: default;
       font-size: 1.6rem;
       line-height: 1.5;
       margin: 0;
       position: relative;
       tab-size: 4;
       word-break: break-word;

       -moz-osx-font-smoothing: grayscale;
       -moz-tab-size: 4;
       -ms-text-size-adjust: 100%;
       -webkit-font-smoothing: antialiased;
       -webkit-tap-highlight-color: transparent;
       -webkit-text-size-adjust: 100%;

       * {
         line-height: inherit;
       }
     }

     a {
       color: #e51b15;
       transition: 150ms color;
       text-decoration: none;
       cursor: pointer;
       &:hover,
       &:focus {
         color: #e51b15;
         text-decoration: none;
       }
     }

     button,
     input,
     select {
       margin: 0;
       font-family: 'Roboto', sans-serif;
     }

     button {
       padding: 0;
       border: none;
       background: none;
     }

     button,
     [type='button'],
     [type='reset'],
     [type='submit'] {
       cursor: pointer;
     }

     input,
     textarea,
     button,
     select,
     a {
       -webkit-tap-highlight-color: transparent;
     }

     dl dl,
     dl ol,
     dl ul,
     ol dl,
     ul dl {
       margin: 0;
     }

     ol ol,
     ol ul,
     ul ol,
     ul ul {
       margin: 0;
     }

     main {
       display: block;
     }

     nav ol,
     nav ul {
       list-style: none;
       padding: 0;
     }

     img {
       border-style: none;
     }

     audio,
     canvas,
     iframe,
     img,
     svg,
     video {
       vertical-align: middle;
     }

     svg:not([fill]) {
       fill: currentColor;
     }

     table {
       border-collapse: collapse;
     }

`

export default Reset
