import React from 'react';
import Project_card from './Project_card';
import "./Projects.css";
import Amazon from "../Assets/Amazon.com.mp4"
import Innax from "../Assets/Innax Project.mp4"
import WeatherApp from "../Assets/Weather-app.mp4"
import passwordgenerator from "../Assets/Password-generator.mp4"
import formvalidation from "../Assets/Form validation.mp4"
import moviecard from "../Assets/movie-card.mp4"
import decathlon from "../Assets/decathlon-clone.mp4"


const Projects = () => {
    return (
        <React.Fragment>
            <section className='project-section1'>
                <div className='project-section1col'>
                <Project_card title="Weather App" desc="This Weather application is capable to show weather of any city in the entire world. This weather app will inform you about the live weather details like temp, wind speed, humidity for the city you searched. And with help of useMemo hook in react.js if the value in input value is same as previous then there'll be no api call. I got the endpoint for this api from openweathermap api. " Videolink={WeatherApp} />
                <Project_card title="Innax App Design" desc="Innax Message Clone app. Using Html and pure css" Videolink={Innax} />
                <Project_card title="Amazon Clone App" desc="This is Amazon Clone i have try to Clone amazon.com with Pure HTML/CSS." Videolink={Amazon} />
                <Project_card title="Random Password Generator" desc="This Password Generator Application help to generate random password as per the user's choice. The user can choose the length of the password, user can also choose whether he/she wants to add number and capital letter in password." Videolink={passwordgenerator} />
                <Project_card title="Form Validation" desc="Form validation is a “technical process where a web-form checks if the information provided by a user is correct.” The form will either alert the user that they messed up and need to fix something to proceed, or the form will be validated and the user will be able to continue with their registration process." Videolink={formvalidation} />
                <Project_card title="Movie Card" desc="This Movie Card Application generates another card dynamically and display the card after we finish fill all the prompt questions" Videolink={moviecard} />
                <Project_card title="Decathlon Website Clone" desc="This is the Decathlon Website clone. which I have tried to clone the Decathlon.com with the help of HTML and CSS" Videolink={decathlon} />
                
                </div>
                {/* <button class="buttonDownload">Download</button> */}
                {/* <h1>Most of the Projects are Uploaded in Github</h1> */}
            </section>
        </React.Fragment>
    )
}

export default Projects