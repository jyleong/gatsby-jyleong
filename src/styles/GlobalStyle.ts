import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const { colors, fonts, fontSizes } = theme;

const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
      /* width: 100%; */
      scroll-behavior: smooth;
      font-family: ${fonts.main};
      font-size: 24px;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }
    
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    body {
      margin: 0;
      width: 100%;
      min-height: 100%;
      overflow-x: hidden;
      background: ${colors.white};
      color: ${colors.primaryDark};
      font-size: ${fontSizes.large};
    }
    a {
      display: inline-block;
      color: ${colors.linkOrange};
      text-decoration: none;
      text-decoration-skip-ink: none;
    }
    section {
      padding-top: 40px;
      padding-bottom: 80px;
    }
    ul, ol {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    p {
      padding: 0;
      margin: 0;
      font-family: ${fonts.main};
      font-size: ${fontSizes.medium};
      color: ${colors.primaryDark};
    }
    h1, h2, h3, h4, h5 {
      padding: 0;
      margin: 0;
      font-weight: 700;
      font-family: ${fonts.main};
    }
    .gatsby-image-outer-wrapper {
      height: 100%;
    }
    img {
      max-width: 100%;
      vertical-align: middle;
    }
    hr {
      width: 100%;
      border: 1px solid red;
    }
`;

export default GlobalStyle;