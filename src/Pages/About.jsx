import React from 'react';
import "./About.css";
import aboutimage from "../Assets/Om_Home.png"
import { NavLink } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <React.Fragment>
      <section className='about-section'>
        <div className='image-div'>
          <img src={aboutimage} alt="aboutimage" />
        </div>
        <div className='about-div'>
          <p>I'm a Developer</p>
          <h1> <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'I Can Develop Websites',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'I Can create Something You Want',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          /></h1>
          <h3>Hello there! I'm a Web Developer, I have done my Matriculation <br /> High school studies from Sant Gyaneshwar Senior Secondary School <br /> i have done my Graduation (BCA - Bachelor of Computer Applications) <br /> from Goswami ganesh dutta sanatan dharma college Palwal,Haryana. <br />I developing Skills of Coding From Softsynth Software Solution Pvt. Ltd.</h3>
          <button className='about-button'><NavLink to='/contact'>Hire me</NavLink></button>
        </div>
      </section>
    </React.Fragment>
  )
}

export default About