import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import "../styles/navbar.css";
import { motion } from "framer-motion";
import mail from "../assets/mail.png";
import back from "../assets/background.png";
import menu from "../assets/list.png";

function Navbar() {
  const strings = ["Ui/Ux Designer", "Junior Full Stack Web Developer"];
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const closeNavbar = () => {
    setOpenLinks(false);
  };
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  useEffect(() => {
    const typeSpeed = 80;
    const backSpeed = 20;

    const typingInterval = setInterval(() => {
      if (isTyping) {
        const currentText = strings[textIndex];
        setText(currentText.substring(0, text.length + 1));

        if (text === currentText) {
          setIsTyping(false);
          setTimeout(() => setIsTyping(true), 1000); // Delay before backspacing
        }
      } else {
        if (text === '') {
          setTextIndex((textIndex + 1) % strings.length); // Cycle through strings
        }
        setText(strings[textIndex].substring(0, text.length - 1));

        if (text === '') {
          setIsTyping(true);
        }
      }
    }, isTyping ? typeSpeed : backSpeed);

    return () => clearInterval(typingInterval);
  }, [isTyping, text, textIndex]);

  return (
    <div className="all">
      <div className="intro">
        <div className="navbar">
          <div className="leftSide" id={openLinks ? "open" : "close"}>
            <div className="hiddenLinks" data-aos="fade-right">
              <button onClick={closeNavbar}>
                <span className="close-button">X</span>
              </button>
              <Link onClick={closeNavbar} to="studies" smooth={true}> Studies </Link>
              <Link onClick={closeNavbar} to="experiences" smooth={true}> Experiences </Link>
              <Link onClick={closeNavbar} to="technologies" smooth={true}> Technologies </Link>
              <Link onClick={closeNavbar} to="projects" smooth={true}> Projects </Link>
              <Link onClick={closeNavbar} to="contact" smooth={true}> Contact </Link>
            </div>
          </div>
          <button onClick={toggleNavbar}>
            <img id="list" src={menu} />
          </button>
          <div className="rightSide">
            <Link to="studies" smooth={true}> Studies </Link>
            <Link to="experiences" smooth={true}> Experiences </Link>
            <Link to="technologies" smooth={true}> Technologies </Link>
            <Link to="projects" smooth={true}> Projects </Link>
            <Link to="contact" smooth={true}> Contact </Link>
          </div>
        </div>
        <div className="container">
          <div className="iteeeeeem1" data-aos="fade-up">
            <h4>Hello i'm BOUCHRA</h4>
            <h2 id="blue">
              {text}
            </h2>
            <a href="mailto:lb_benkhelifa@esi.dz">
              <motion.button whileHover={{ scale: 1.05 }} id="but">
                <div className="flex1">Email <img id="imag" src={mail} /></div>
              </motion.button>
            </a>
          </div>
          <div className="iteeeeeem">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            ><img id="imagee" src={back} /></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
