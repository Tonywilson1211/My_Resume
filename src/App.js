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


function App() {
  return (
    <>
      <Particle/>
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Education/>
      <History/>
      <Portfolio/>
      <Achievements />
      
    </>
  );
}

export default App;
