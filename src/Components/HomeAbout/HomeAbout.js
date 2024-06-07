import React from 'react'
import "./HomeAbout.css"
import aboutimg from "../../Assets/About/aboutus.jpg"
import { Link } from 'react-router-dom'
import { FaUserDoctor } from "react-icons/fa6";
import QualityCard from './QualityCard';

const HomeAbout = () => {
    const Quality = [
        {
            id: 1,
            icon: <FaUserDoctor />,
            title: "We offer integrated treatment with personalized solutions for mental and cognitive health.",
            desc: "Discover our solution  HeadApp – Computer-Aided Cognitive Screening and Training specifically designed to aid patients with acquired brain injuries, neurodevelopmental disorders, and cognitive deficits in psychiatric conditions."
        },
    ]
    return (
        <div className='HomeAbout'>
            <div className='HomeAbout-main'>
                <div className="homeabout-box">
                    <div className="homeabout-left">
                        <h2>Cognitive Rehabilitation Therapy</h2>
                        <p>Cognitive rehabilitation or cognitive retraining therapy aims to rebuild cognitive functions that have been impaired and help patients return to their daily lives.</p>
                        <p>Cognitive rehabilitation refers to a number of therapies that offer retraining in cognitive functions. The main focus is to correct deficits in memory, concentration and attention, perception, learning, planning, sequencing, and judgment.</p>
                        <p> Cognitive rehabilitation therapy (CRT) aims to enhance the person’s capacity to process and interpret information. This can improve the person’s ability to function in all aspects of daily life, such as  maintaining relationships with family and friends, working, and participating in their community.</p>
                        {/* <ul>
                            <li>Scientific skills for getting a better result</li>
                            <li>A good environment for work</li>
                            <li>Professional doctors</li>
                            <li>Digital laboratory</li>
                            <li>Emergency services</li>
                        </ul> */}
                        <div className="homeabout-button">
                            <Link to={"/about"}>About Us</Link>
                        </div>
                    </div>
                    <div className="homeabout-right">
                        <img src={aboutimg} alt="" />
                    </div>
                </div>
                <div className="homeabout-quality-box">
                    {Quality.map((item) => (
                        <QualityCard detail={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeAbout
