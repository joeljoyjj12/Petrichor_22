import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./fonts/Linotte_Regular_400.otf" 
import "./fonts/AGENCYR.TTF"
import "./fonts/CODE_Light.otf"
import "./fonts/CODE_Bold.otf"

import HttpsRedirect from 'react-https-redirect';
 
ReactDOM.render(
  <HttpsRedirect>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </HttpsRedirect>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
