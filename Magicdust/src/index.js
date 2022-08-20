import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBS from './NavigationBar/NavbarBS'
import Logtest from './LoginAndSignup/logintest';
import InputAdornments from './DumpFolder/textwithadorments'
import SignIn from './LoginAndSignup/SignIn'
import Samplepass from './sample.js/samplepass'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Samplepass></Samplepass> */}
    <NavbarBS/>
    <App />
    {/* <Logtest></Logtest> */}
    {/* <InputAdornments/> */}
    {/* <SignIn></SignIn> */}
    </BrowserRouter>
  </React.StrictMode>
);

