import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import instagram from '../assets/instagram.png'
import behance from '../assets/behance.png'
import linkdin from '../assets/linkdin.png'
import github from '../assets/github.png'
import '../styles/contact.css'
function Contact() {
    useEffect(()=> {
        AOS.init({duration:2000});
    },[]
    );
  return (
    <div id="contact" >
    <div className='footer'>
    <a href="https://www.instagram.com/bouchra_benkhelifa/?next=%2F" target="_blank" rel="noopener noreferrer">  <img id='picture' src={instagram} /></a>
    <a href="https://github.com/bouchrabenkhelifa" target="_blank" rel="noopener noreferrer">    <img id='picture' src={github} /></a>
        <a href="https://www.linkedin.com/in/bouchra-benkhelifa-830461284/" target="_blank" rel="noopener noreferrer">   <img id='picture' src={linkdin} /></a>
        <a href="https://www.behance.net/bouchrabenkhel1" target="_blank" rel="noopener noreferrer">  <img id='picture' src={behance} /></a>
        <p>Designed & Developped by @me</p>
        <p>©All the Rights are reserved  </p>
     
    </div>
  </div>

  )
}

export default Contact
