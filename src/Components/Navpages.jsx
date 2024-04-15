import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Pages/About';
import Home from "../Pages/Home"
import Projects from "../Pages/Projects"
import Contact from '../Pages/Contact';
import Skills from '../Pages/Skills';

const Navpages = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>

      </section>
    </React.Fragment>
  )
}

export default Navpages;