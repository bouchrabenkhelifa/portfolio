import React, { useState } from "react";
import { Link } from 'react-scroll'
import Typed from "react-typed";
import "../styles/navbar.css";
import {motion } from "framer-motion"
import mail from "../assets/mail.png"
import back from "../assets/background.png"
import menu from "../assets/list.png"




function Navbar() {
    const closeNavbar = () => {
        setOpenLinks(false);
      };
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
  return ( 
    <div className="all">
  <div className="intro">
    <div className="navbar">

      <div className="leftSide"  id={openLinks ? "open" : "close"}>
     
        <div className="hiddenLinks" data-aos="fade-right">
        <button onClick={closeNavbar}>
                <span className="close-button">X</span>
              </button>
          <Link onClick={closeNavbar} to="studies" smooth={true} > Studies </Link>
          <Link onClick={closeNavbar} to="experiences" smooth={true} > Experiences </Link>
          <Link onClick={closeNavbar} to="technologies" smooth={true} > Technologies </Link>
          <Link onClick={closeNavbar} to="projects" smooth={true}>Projects </Link>
          <Link onClick={closeNavbar} to="contact" smooth={true} > Contact </Link>
        </div>
      
      </div>
      
      <button onClick={toggleNavbar} >
        <img id="list"  src={menu} />
        </button>
      <div className="rightSide">

          <Link to="studies" smooth={true} > Studies </Link>
          <Link to="experiences" smooth={true} > Experiences </Link>
          <Link to="technologies" smooth={true} > Technologies </Link>
          <Link to="projects" smooth={true} >Projects </Link>
          <Link to="contact" smooth={true} > Contact </Link>
       
      </div>
      </div>
      <div className="container">
      <div className="iteeeeeem1" data-aos="fade-up">  <h4>Hello i'm BOUCHRA  </h4>
      <h2 id="blue"> 
      <Typed
          strings={[
            "Ui/Ux Designer",
            "Junior Full Stack Web Developer",
            
           
          ]}
          typeSpeed={80}
          backSpeed={20}
          loop
        />
      
      </h2>
      <a href="mailto:lb_benkhelifa@esi.dz">
        <motion.button whileHover={{ scale: 1.05 }} id="but">
            <div className="flex1">Email <img id="imag" src={mail} /></div>
        </motion.button>
      </a> 
   </div>
   <div className="iteeeeeem"> 
      <motion.div
      initial={{ opacity: 0, y: -100 }} // Initial state
      animate={{ opacity: 1, y: 0 }}    // Animation state
      transition={{ duration: 1 }}      // Animation duration
    ><img id="imagee" src={back} /></motion.div></div>
</div>
</div>
</div>
  );
}

export default Navbar;