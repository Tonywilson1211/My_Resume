import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Particle from './components/Particle';
import Education from './components/Education';

function App() {
  return (
    <>
      <Particle/>
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Education/>
    </>
  );
}

export default App;
