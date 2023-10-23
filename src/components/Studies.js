import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/studies.css";
import esi from "../assets/esi.png";
import estin from "../assets/estin.png";


function Studies() {
    useEffect(()=> {
        AOS.init({duration:2000});
    },[]
    );
  return (
    <div id="studies">

       <h2 data-aos="fade-up"> Studies</h2> 
     
       <div className='container' >
  
       <div className='item'data-aos="fade-up">
       <img id='image'  src={estin} />
       <h5>Higher national school of computer science Bejaia</h5>
    
       <p id="noire">2 Years (cs engineer)
          From 2021 to 2023
       </p>
        </div>
       
        <div className='item' data-aos="fade-up">
        <img id='image' src={esi} />
        <h5>Higher national school of computer science Algiers</h5>
        <p id="noire">I had started in september 2023,
         (computer science engineer 
         in 2026 inshalah)
        </p>
        </div>
      </div>
      
  </div>
  )
}

export default Studies
