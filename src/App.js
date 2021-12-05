import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/about/About';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import ContactMe from './components/Contact/Contact';
import Service from './components/Service/Service';

function App() {
  return (
    <>
      <Router>
        <div className="sidebar">
          <Navbar/>
        </div>
        <div className="main-content">
          <HomePage/>
          <About/>
          <Service/>
          <ContactMe/>
          
        </div>
      </Router>
    </>
  );
}

export default App;
