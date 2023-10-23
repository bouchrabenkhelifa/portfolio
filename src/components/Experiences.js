import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/experiences.css";
import byte from "../assets/byte.png";
import gdsc from "../assets/gdsc.png";
import gdscc from "../assets/gdscc.png";
import bytecraft from "../assets/bytecraft.png"
function Experiences() {
    useEffect(()=> {
        AOS.init({duration:2000});
    },[]
    );
    return (
        <div id="experiences">
            <h2 data-aos="fade-up" >Experiences</h2>
            <div className='container1'>

                <div className='item1'data-aos="fade-right" >
                    <h3 data-aos="fade-up"> ByteCraft</h3>
                    <p id="noire" > I was a member in the design departement ByteCraft for 2 Years 2022-2023
                       , HERE are some pictures with the CRAFTERS : 
                    </p>
                 
                </div>
                <div className='item1'data-aos="fade-left">
                <img id='image1' src={byte} />
                </div>
                <div className='item1'data-aos="fade-right">
                <h3 data-aos="fade-up"> GDSC</h3>
                    <img id='image1' src={gdscc} />
                </div>
                <div className='item1'data-aos="fade-left">
                
                    <p id="noire">I was a member in the developement departement GDSC In 2022/2023
                         , HERE are some pictures with the Developers : </p>
                       

                </div>
            </div>


        </div>
    )
}

export default Experiences
