import React from 'react';
import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <React.Fragment>
            <section className='contact-section'>
                <div className='Mediaquery contact-div'>
                    <div className='contact-div1'>
                        <h1 className='contact-me'>Contact Me</h1>
                        <h2 className='hear'>I Want To Hear From You</h2>
                    </div>
                    <div className="Address">
                        <div className='Location location-div'><p><FaLocationDot /></p>Address <br />India(Haryana,Faridabad)</div>
                        <div className='Email Email-div'><p><MdEmail /></p>Email <br />Ommishrra@Gmail.com</div>
                        <div className='Phone Phone-div'><p><FaPhoneAlt /></p>Phone +919306159718</div>
                    </div>
                </div>
                <div className='Mediaquery map-div'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224611.86194928412!2d77.15426124057382!3d28.402344349530132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc15f5a424b1%3A0xe4f50576c850e0f2!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1710966067026!5m2!1sen!2sin"></iframe>
                </div>
                <div className='Mediaquery Formdiv'>
                    <div className="contact-form">
                        <form action="https://formspree.io/f/xqkrydgr" method='POST' className='contact-inputs'>
                            <h1>Feel free to Contact us</h1>
                            <input type="text" name='username' placeholder='username' autoComplete='off' required />
                            <input type="number" min="10" name='Phone' placeholder='Phone no.' autoComplete='off' required />
                            <input type="email" name='Email' placeholder='Email' autoComplete='off' required />
                            <textarea name="message" cols="30" rows="6" autoComplete='off' required placeholder='Enter Your Message here'></textarea>
                            <input type="submit" value="send" />

                        </form>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Contact