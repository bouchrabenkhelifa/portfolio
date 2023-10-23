import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import Studies from "./components/Studies";
import Experiences from "./components/Experiences";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { Element } from 'react-scroll'

function App() {
  return (
    <div className="App">
       <Navbar />
      <Element name="studies">
        <Studies />
      </Element>
      <Element name="experiences">
        <Experiences />
      </Element>
   
      <Element name="technologies">
        <Technologies />
      </Element>
      <Element name="projects">
        <Projects/>
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <ScrollToTopButton />
                        

                
             
    </div>
  );
}

export default App;
