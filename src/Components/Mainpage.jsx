import React from 'react';
import "./Mainpage.css";
import Navbar from './Navbar';
import Navpages from './Navpages';
// import { TypeAnimation } from 'react-type-animation';

const Mainpage = () => {
  return (
    <React.Fragment>
      <section className='mainpage'>
        <div className='mainpagesections'>

          {/* navbar section */}
          <div className='navbar-section'>
            <Navbar/>
          </div>

          {/* navpage section */}
          <div className='navpage-section'>
            <Navpages />
          </div>

        </div>

      </section>
    </React.Fragment>
    // <>
    //  <TypeAnimation
    //   sequence={[
    //     // Same substring at the start will only be typed out once, initially
    //     'We produce food for Mice',
    //     1000, // wait 1s before replacing "Mice" with "Hamsters"
    //     'We produce food for Hamsters',
    //     1000,
    //     'We produce food for Guinea Pigs',
    //     1000,
    //     'We produce food for Chinchillas',
    //     1000
    //   ]}
    //   wrapper="span"
    //   speed={50}
    //   style={{ fontSize: '2em', display: 'inline-block' }}
    //   repeat={Infinity}
    // />
    
    // </>
  )
}

export default Mainpage;