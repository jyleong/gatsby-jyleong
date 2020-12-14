import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const { colors } = theme;

const reset = () => `
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0 !important;
    padding: 0;
  }

  ::selection {
    background-color: ${theme.colors.contrastLightest};
    color: rgba(0, 0, 0, 0.70);
  }

  a.anchor, a.anchor:hover, a.anchor:link {
    background: none !important;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset()}  
  html {
    scroll-behavior: smooth;
    font-size: 18px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0 auto;
    background: ${theme.colors.primaryBackground};
    color: ${colors.primaryDark};
    font-family: Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif;
    max-width: 1400px;
  }

  figure {
    a.gatsby-resp-image-link {
      background: none;
    }
  
    span.gatsby-resp-image-wrapper {
      max-width: 100% !important;
    }
  }

  hr {
    display: block;
    height: 1px;
    width: 55%;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
  }

  a {
    display: inline-block;
    color: ${colors.linkDefault};
    text-decoration: none;
    text-decoration-skip-ink: none;
  }

  article {
    position: relative;
    padding: 5rem 0rem;
  }
  
  section {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  p,
  ol,
  ul {
    font-size: 1.1rem;
    line-height: 1.2rem;
  }

  p {
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    padding-right: 0;
    vertical-align: baseline;
    color: ${colors.primaryDark};
  }

  code {
    font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    font-size: 1rem;
    line-height: 1.42;
  }

  h1 > code,
  h2 > code,
  h3 > code {
    font-size: 0.8em;
  }

  pre.code {
    font-size: 0.9rem;
    width: 52.5%;
    margin-left: 2.5%;
    overflow-x: auto;
  }

  pre.code.fullwidth {
    width: 90%;
  }

  blockquote {
    font-size: 1.4rem;
  }

  blockquote p {
    width: 55%;
    margin-right: 40px;
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1 {
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: 3.2rem;
    line-height: 1;
  }
  
  h2 {
    font-weight: 400;
    margin-top: 0.9rem;
    margin-bottom: 0.5rem;
    font-size: 2.2rem;
    line-height: 1;
  }
  
  h3 {
    font-weight: 400;
    font-size: 1.7rem;
    margin-top: 0.7rem;
    margin-bottom: 0.3rem;
    line-height: 1;
  }

  h4 {
    font-weight: 400;
    font-size: 1.4rem;
    margin-top: 0.5rem;
    margin-bottom: 0.3rem;
    line-height: 1;
  }

  figure {
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    max-width: 55%;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    margin: 0 0 3em 0;
  }
  
  figcaption {
    float: right;
    clear: right;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.1rem;
    line-height: 1.6;
    vertical-align: baseline;
    position: relative;
    max-width: 40%;
  }
  
  figure.fullwidth figcaption {
    margin-right: 24%;
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }
`;

export default GlobalStyle;