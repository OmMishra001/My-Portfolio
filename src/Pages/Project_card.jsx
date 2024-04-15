import React from 'react';
import "./Project_card.css"

const Project_card = (props) => {
  return (
    <React.Fragment>
      <section className='project-section2'>
        <div className='disc-div'>
          <div className="video-section">

            <h1 className='title'>{props.title}</h1>
            <video src={props.Videolink} muted loop autoPlay></video>
          </div>
          <p className='description'><p>Description :- </p>{props.desc}</p>
        </div>
      </section>
    </React.Fragment >
  )
}

export default Project_card