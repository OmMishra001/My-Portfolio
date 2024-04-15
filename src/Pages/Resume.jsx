import React from 'react'
import "./Resume.css"
import OMResume from "../Assets/OmMishraResume.pdf"

const Resume = () => {
  return (
   <>
   <button className='Resume'>
    <a href={OMResume} download="Resume.pdf">Download CV</a>
   </button>
   </>
  )
}

export default Resume