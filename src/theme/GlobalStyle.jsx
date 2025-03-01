import { Global, css } from '@emotion/react';

const globalStyle = css`
  @font-face {
    font-family: 'KHNPHDotfR';
    src: url('./KHNPHDotfR.otf');
    font-weight: 100 900;
  }
  @font-face {
    font-family: 'KHNPHUotfR';
    src: url('./KHNPHUotfR.otf');
    font-weight: 100 900;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  menu,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    scroll-behavior: smooth;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    margin: 0;
  }
  menu,
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }

  body {
    color: black;
    font-family: 'KHNPHDotfR', 'KHNPHUotfR';
  }
  .normal {
    font-weight: 400;
  }
  .bold {
    font-weight: 700;
  }
  .bolder {
    font-weight: 800;
  }
  .light {
    font-weight: 300;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  input {
    border: none;
  }
  input:focus {
    outline: none;
  }
  button {
    cursor: pointer;
    outline: none;
  }
`;

export const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};
