import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const { colors, fonts, fontSizes } = theme;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    font-family: ${fonts.main};
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
    width: 87.5%;
    margin-left: auto;
    margin-right: auto;
    min-height: 100%;
    overflow-x: hidden;
    background: ${colors.white};
    color: ${colors.primaryDark};
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
    color: ${colors.linkOrange};
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
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding-right: 0;
    vertical-align: baseline;
    font-family: ${fonts.main};
    color: ${colors.primaryDark};
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

  h1, h2, h3, h4, h5 {
    padding: 0;
    margin: 0;
    font-weight: 700;
    font-family: ${fonts.main};
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