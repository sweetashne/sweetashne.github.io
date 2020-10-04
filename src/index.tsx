import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle
`html, body {
  height: 100%;
  // Styles to be inherited. Needs to be on body to affect introjs
  font-weight: 400;
  font-size: 21px;
  line-height: 1.25rem;    
} 
h1 {
  color: #ececec;
  font-size: 38px;
  font-weight: 700;
  padding: 0%;
  margin: 0%;
}
h2 {
  color: #2f2d2d;
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
}
h3 {
  color: #2f2d2d;
  font-family: Lato;
  font-size: 23px;
  font-weight: 700;
}
h4 {
  color: #2f2d2d;
  font-size: 19px;
  font-weight: 700;
  padding: 5px 2px 2px 5px;
  margin: 5px 5px 5px 5px; 
  margin-right: 10px
}
.body {
  width: 1200px;
  /* height: 1754px; */
  color: #2f2d2d;
  font-family: "Open Sans";
  font-size: 21px;
}
p {
  color: #2f2d2d;
  font-size: 21px;
  font-family: "Open Sans";
  margin: 0;
  padding: 0;
}
#root { 
  height: 100%;    
}`;


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
