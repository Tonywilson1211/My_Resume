import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Particle from './components/Particle';
import Education from './components/Education';
import History from './components/History';
import Portfolio from './components/Portfolio';
import Achievements from './components/Achievements';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Particle/>
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Portfolio/>
      <Education/>
      <Achievements/>
      <History/>
      <Contact/>
      
      
      
    </>
  );
}

export default App;
