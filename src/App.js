import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom';
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
        <nav>
          <ul className='navbar'>
            <li>
              <NavLink exact to="/home">Home</NavLink>
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
        </nav>
        

        <Routes>
          <Route exact path="/home" element={<Home />} />
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
