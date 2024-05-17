import React from 'react'
import "./HomeContact.css"
import contactimg from "../../Assets/Contact/contact.jpg"
import Form from '../Form/Form'
import { Link } from 'react-router-dom'


const HomeContact = () => {
    return (
        <div className='HomeContact'>
            <div className='HomeContact-main'>
                <div className="homecontact-right">
                    <div className="homecontact-right-box">
                        <Form />
                    </div>
                </div>
                <div className="homecontact-left">
                    <div className="homecontact-left-box">
                        <h2>Get In Touch In The Mean Time.</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, magni.</p>
                        <div className="homeleft-box-list">
                            <ul>
                                <li><p>Monday - Thursday</p><p>09:00am - 05:00pm</p></li>
                                <li><p>Friday</p><p>01:00am - 05:00pm</p></li>
                                <li><p>Saturday - Sunday</p><p>09:30am - 04:00pm</p></li>
                            </ul>
                        </div>
                        <p>Want to Visit Our Clinic?Please <Link to="">Get In Touch</Link> with us</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeContact
