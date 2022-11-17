import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, NavLink, Routes, Navigate} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Tools from './components/Tools';
import Services from './components/Services';
import Calculator from './components/tools/Calculator';
import Weather from './components/tools/Weather';
import Login from './components/auth/Login';

import { getAuthStatus, login, logout, register } from './components/auth/AuthState';

function App() {
  
  function RequireAuth({ children }) {
    return getAuthStatus() ? children : <Navigate to="/login" replace />;
  }

  function RequireUnauth({ children }) {
    return !getAuthStatus() ? children : <Navigate to="/home" replace />;
  }

  return (
    <Router>
      <div>
        <div className="w3-top">
          <div className="w3-bar w3-red w3-card w3-left-align w3-large">
            <NavLink className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w-red" title="Toggle Navigation Menu" onClick={ () => openNav()}><i className="fa fa-bars"></i></NavLink>
            <NavLink to="/home" className={({isActive}) => `w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white ${isActive ? 'w3-white' : ''}`} onClick={ () => closeNav()}>Home</NavLink>
            {[ getAuthStatus() && LoggedInLinks ]}
            {[ !getAuthStatus() && NotLoggedInLinks ]}
          </div>
        
          <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
            <NavLink to="/home" className="w3-bar-item w3-button w3-padding-large" onClick={ () => closeNav()}>Home</NavLink>
            {[ getAuthStatus() && LoggedInLinks2 ]}
            {[ !getAuthStatus() && NotLoggedInLinks2 ]}
          </div>
        </div>

        <Routes>
          <Route path="/" element={ <Navigate replace to="/home" /> } />
          <Route path="/home" element={<Home />} />
          <Route path="/about" 
            element={
              <RequireAuth>
                <About />
              </RequireAuth>
            } 
          />
          <Route path="/tools" 
            element={
              <RequireAuth>
                <Tools />
              </RequireAuth>
            } 
          />
          <Route path="/services" 
            element={
              <RequireAuth>
                <Services />
              </RequireAuth>
            } 
          />
          <Route path="/tools/calculator" 
            element={
              <RequireAuth>
                <Calculator />
              </RequireAuth>
            } 
          />
          <Route path="/tools/weather" 
            element={
              <RequireAuth>
                <Weather />
              </RequireAuth>
            } 
          />
          
          <Route path="/login" 
            element={
              <RequireUnauth>
                <Login />
              </RequireUnauth>
            } 
          />
          {/* <Route path="/register" 
            element={
              <RequireUnauth>
                <Register />
              </RequireUnauth>
            } 
          /> */}

        </Routes>
      </div>
    </Router>
  );
}

const LoggedInLinks = [
  <NavLink key="0" to="/about" className={({isActive}) => `w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white ${isActive ? 'w3-white' : ''}`} onClick={ () => closeNav()}>About</NavLink>,
  <NavLink key="1" to="/tools" className={({isActive}) => `w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white ${isActive ? 'w3-white' : ''}`} onClick={ () => closeNav()}>Tools</NavLink>,
  <NavLink key="2" to="/services" className={({isActive}) => `w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white ${isActive ? 'w3-white' : ''}`} onClick={ () => closeNav()}>Services</NavLink>
];

const NotLoggedInLinks = [
  <NavLink key="0" to="/login" className={({isActive}) => `w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white ${isActive ? 'w3-white' : ''}`} onClick={ () => closeNav()}>Login</NavLink>
];

const LoggedInLinks2 = [
  <NavLink key="0" to="/about" className="w3-bar-item w3-button w3-padding-large" onClick={ () => closeNav()}>About</NavLink>,
  <NavLink key="1" to="/tools" className="w3-bar-item w3-button w3-padding-large" onClick={ () => closeNav()}>Tools</NavLink>,
  <NavLink key="2" to="/services" className="w3-bar-item w3-button w3-padding-large" onClick={ () => closeNav()}>Services</NavLink>
];

const NotLoggedInLinks2 = [
  <NavLink key="0" to="/login" className="w3-bar-item w3-button w3-padding-large" onClick={ () => closeNav()}>Login</NavLink>
];


export default App;

function openNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") === -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function closeNav() {
  var x = document.getElementById("navDemo");
  x.className = x.className.replace(" w3-show", "");
}
