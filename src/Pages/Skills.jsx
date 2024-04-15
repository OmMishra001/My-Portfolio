import React from 'react'
import "./Skills.css"

const Skills = () => {
    return (
        <React.Fragment>
            <section className='Skills-section'>
                <div className='header Skills-head'>
                    <h2>My <span>Skills</span></h2>
                    <p>Here is my Skills to represent my Expertise</p>
                </div>
                <div className="skills-main">
                    <div className="skill-bar">
                        <div className="info">
                            <p>HTML</p>
                            <p className='percent'>90%</p>
                        </div>
                        <div className="bar">
                            <span className='html'>

                            </span>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <div className="info">
                            <p>CSS</p>
                            <p className='percent'>85%</p>
                        </div>
                        <div className="bar">
                            <span className='css'>

                            </span>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <div className="info">
                            <p>JAVASCRIPT</p>
                            <p className='percent'>80%</p>
                        </div>
                        <div className="bar">
                            <span className='javascript'>

                            </span>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <div className="info">
                            <p>REACT JS</p>
                            <p className='percent'>70%</p>
                        </div>
                        <div className="bar">
                            <span className='react'>

                            </span>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <div className="info">
                            <p>BOOT STRAP</p>
                            <p className='percent'>80%</p>
                        </div>
                        <div className="bar">
                            <span className='bootstrap'>

                            </span>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <div className="info">
                            <p>TAILWIND</p>
                            <p className='percent'>65%</p>
                        </div>
                        <div className="bar">
                            <span className='tailwind'>

                            </span>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Skills