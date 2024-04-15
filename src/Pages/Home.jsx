import React from 'react';
import "./Home.css"
import { FaFacebookF } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import image from "../Assets/Om_Home.png"
import { NavLink } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <React.Fragment>
      <section className='home-section'>
        <div className='homediv'>
          <h2>Hello, I'm</h2>
          <div className='typewriter'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Om Mishra',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'React Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>
          <h3>A <span className='firstcolor'>React Developer</span> From <span className='secondcolor'> India </span></h3>
          <p>I'm React developer based in India, and I'm very <br /> passionate and dedicated to my work.</p>
          <div className='social'><NavLink to='/about'><p className='About-me'>About Me</p></NavLink><span><a href="https://www.facebook.com/OmmishraOfficialaccount/" target='blank'><FaFacebookF /></a><a target='blank' href="https://www.linkedin.com/in/om-mishra-8aaaa52b7/"><FaLinkedin /></a><a href="https://www.instagram.com/om_mishra._001/" target='blank'><FaInstagram /></a><a href="mailto:Ommishra9718.com" target='blank'><FaMailBulk /></a></span></div>
        </div>
        <div className="image">
          <img src={image} alt="image" />
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home