import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import NimbusSansWoff2 from "./assets/fonts/NimbusSanL-Reg.woff2"
import NimbusSansWoff from "./assets/fonts/NimbusSanL-Reg.woff"
import NimbusSansTtf from "./assets/fonts/NimbusSanL-Reg.ttf"

const Global = createGlobalStyle`
@font-face {
  font-family: "Nimbus-Sans";
  src: url(${NimbusSansWoff2}) format("woff2"),
       url(${NimbusSansWoff}) format("woff"),
       url(${NimbusSansTtf}) format("truetype");
  font-weight: 400;
}

:root {
  --main-color: #ff3131;
}

* {
  font-family: Nimbus-Sans, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 22px;
}
`

const theme = {
  color: "#ff3131",
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Global/>
    <App />
  </ThemeProvider>
);
