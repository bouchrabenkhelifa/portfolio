import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/technologies.css";
import figma from "../assets/figma.png";
import django from "../assets/django.png";
import node from "../assets/node.png";
import react from "../assets/react.png";


function Technologies() {
    useEffect(()=> {
        AOS.init({duration:2000});
    },[]
    );
  return (
    <div id="technologies" >
        
    <h2 data-aos="fade-up">Technologies</h2>
    <h4 data-aos="fade-up">languages:</h4> <p id="noire" data-aos="fade-up">C- Assembly -Python- Java- Java Script</p>
    <div className='container2'>
    <div className='itemm' data-aos="fade-up"> <img id='pic' src={figma} />  </div>
    <div className='itemm'  data-aos="fade-up">   UI/UX Designer (familiar with figma) </div>
    <div className='itemm' data-aos="fade-up"> <img id='pic' src={react} />  </div>
    <div className='itemm' data-aos="fade-up"> Front end Developer (familiar with css/js) framework REACT.JS   </div>
    <div className='itemm' data-aos="fade-up"> <img id='pic' src={django} />  </div>
    <div className='itemm' data-aos="fade-up"> Backend Developer i d already worked with django in many projects  </div>
    <div className='itemm' data-aos="fade-up">  <img id='pic' src={node} /> </div>
    <div className='itemm' data-aos="fade-up">  Beginner in node.js </div>
  
    
    </div>   </div>
  )
}

export default Technologies
