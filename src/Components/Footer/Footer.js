import React from 'react'
import "./Footer.css"
import flogo from "../../Assets/Logo.png"
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer-main'>
                <div className="footer-box">
                    <img src={flogo} alt="" />
                    <p>Explore everything from screenings to cognitive training and language exercises.</p>
                    <div className="footer-box-media">
                        <Link >
                            <p>
                                <FaTwitter />
                            </p>
                        </Link>
                        <Link>
                            <p>
                                <FaLinkedinIn />
                            </p>
                        </Link>
                        <Link>
                            <p>
                                <FaYoutube />
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="footer-box">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact-us">Send Enquery</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/privacy-policy">privacy policy</Link></li>
                    </ul>
                </div>
                <div className="footer-box">
                    <h2>Inportant Links</h2>
                    <ul>
                        <li><Link to="/cognitive-training-programs">Cognitive Training Programs</Link></li>
                        <li><Link to="/screening-tests">Screening Tests</Link></li>
                        <li><Link to="/therapeutic-areas">Therapeutic Areas</Link></li>
                        <li><Link to="/telerehabilitation">Telerehabilitation</Link></li>
                        <li><Link to="/resources">Resources</Link></li>
                    </ul>
                </div>

                <div className="footer-box">
                    <h2>Get in Touch</h2>
                    <ul>
                        <li>
                            <Link>
                                <p><FaLocationDot /></p> <p>Office No-814, NEXTRA The Address District Centre Mayur Vihar Ph-1 Extn Delhi-110091</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="tel:+91 88009 13399">
                                <p><FaPhone /></p> <p>+91 88009 13399</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="mailto: info@headapp.in">
                                <p><FaEnvelope /></p> <p>info@headapp.in</p>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="footer-down">
                <div className="footer-copyright">
                    <p>©2024. HeadApp All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
