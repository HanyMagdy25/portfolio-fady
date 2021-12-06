import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/about/About';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import ContactMe from './components/Contact/Contact';
import Service from './components/Service/Service';

function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <Router>
        <div className={`sidebar ${click ? "nav-toggle" : ""}`}>
          <Navbar click={click} setClick={setClick}/>
        </div>
        <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
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
