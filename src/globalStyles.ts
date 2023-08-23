import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  #root {
    --brand-dark: #fefefe;
    --brand-light: #d2c2b3;
    --brand-primary: #f5e1cf;
    --brand-secondary: #9d5839;
    --brand-tertiary: #9f8b7b;
    --brand-white: #fefefe;

    --font-size-xxs: 1.2rem;
    --font-size-xs: 1.4rem;
    --font-size-sm: 1.6rem;
    --font-size-md: 1.8rem;
    --font-size-lg: 2rem;
    --font-size-xl: 2.4rem;

    --spacing-xxs: 0.4rem;
    --spacing-xs: 0.8rem;
    --spacing-sm: 1.2rem;
    --spacing-md: 1.6rem;
    --spacing-lg: 2.4rem;
    --spacing-xl: 3.2rem;
    --spacing-xxl: 4.8rem;

    --border-radius: 0.4rem;
    --border-radius-sm: 0.2rem;
    --border-radius-lg: 0.8rem;
    
    --shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 0.8rem 1.6rem rgba(0, 0, 0, 0.1);
    --shadow-sm: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
    --shadow-md: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
    --shadow-left: -0.4rem 0 0.8rem rgba(0, 0, 0, 0.1);
    --shadow-right: 0.4rem 0 0.8rem rgba(0, 0, 0, 0.1);

  }

  // estilizer a barra de scroll  
  ::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
  }

  ::-webkit-scrollbar-track {
    background: var(--brand-primary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--brand-secondary);
    border-radius: 0.4rem;
  }


  *,
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

  html, body, #root {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  *::selection{
    color: var(--brand-white);
    background-color: var(--brand-secondary);
  }

  body {
    font-family: 'Bitter', serif;
    font-size: 1.6rem;
    background-color:#251713;
    /* background-color: var(--brand-secondary); */
    color: #fefefe;
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
      color: var(--brand-secondary);
      transition: 150ms color;
      text-decoration: none;
      cursor: pointer;
      &:hover,
      &:focus {
        color: var(--brand-secondary);
        text-decoration: none;
      }
    }

    button,
    input,
    select {
      margin: 0;
      font-family: 'Sue Ellen Francisco', sans-serif;
    }

    h1, h2,h3 {
      font-family: 'Sue Ellen Francisco', sans-serif;
    }

    button {
      appearance: none;
      padding: 0;
      border: none;
      background: none;
    }

    button,
     [type='button'],
     [type='reset'],
     [type='submit'] {
       cursor: url('./images/espada.png');
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

export default GlobalStyles
