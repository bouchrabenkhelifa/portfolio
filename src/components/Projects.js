import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/projects.css';
import estate from "../assets/estate.jpg"
import pizza from "../assets/pizza.png"
import shop from "../assets/shop.png"
import github from "../assets/github.png"


function Projects() {
    useEffect(()=> {
        AOS.init({duration:2000});
    },[]
    );
  return (
    <div id="projects" >
      <h2> Myyy projects</h2> 
      <p id="para" data-aos="fade-up">   Explore the heart of my creations on GitHub. 
      Dive into the code that brings these projects to life, where every 
      line tells a story of innovation and dedication . Discover the magic behind the scenes:
<div className='blue'> <a href="https://www.behance.net/gallery/182369493/PORTFOLIO" target="_blank" rel="noopener noreferrer">  MY-BEHANCE</a> & <a href="https://github.com/bouchrabenkhelifa" target="_blank" rel="noopener noreferrer">  MY-GITHUB</a> </div>
 </p>
    
      <div className='container3'>
         <div className='item3'data-aos="fade-up" >
         <img id="picc1" src={estate} />
         <p id="hi">Real estate agency</p>
         <a href="https://github.com/bouchrabenkhelifa/real-estate" target="_blank" rel="noopener noreferrer"><p className='flexx'><img id="pic4" src={github} />code source</p></a>
         </div>
      <div className='item2' data-aos="fade-up">
      <img id="picc"  src={shop} /> 
      <p>pizza shop</p>
      <a href="https://github.com/bouchrabenkhelifa/pizza-shop" target="_blank" rel="noopener noreferrer"><p className='flexx'><img id="pic4" src={github} />code source</p></a>
      </div>
      <div className='item3'data-aos="fade-up"> 
      <img id="picc3"  src={pizza} />
      <p>Fast food</p>
      <a href="https://github.com/bouchrabenkhelifa/pizza-shop" target="_blank" rel="noopener noreferrer"><p className='flexx'><img id="pic4" src={github} />code source</p></a>
      </div>
      </div>
      </div>
  )
}

export default Projects
