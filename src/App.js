import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, NavLink, Routes, Navigate} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Tools from './components/Tools';
import Services from './components/Services';
import Calculator from './components/Tools/Calculator';
import Weather from './components/Tools/Weather';

function App() {

  return (
    <Router>
      <div>
        <nav className="navbar bg-light p-0">
          <div className='container'>
            <ul className='custom-nav'>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/tools">Tools</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        

        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tools/calculator" element={<Calculator />} />
          <Route path="/tools/weather" element={<Weather />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
