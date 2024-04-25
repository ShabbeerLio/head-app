import React from 'react'
import "./HomeAbout.css"
import { Link } from 'react-router-dom'
import { FaUserDoctor, FaTruckMedical, FaChartLine } from "react-icons/fa6";
import QualityCard from './QualityCard';

const HomeAbout = () => {
    const Quality = [
        {
            id: 1,
            icon: <FaUserDoctor />,
            title: "Qualified Doctors",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        },
        {
            id: 1,
            icon: <FaTruckMedical />,
            title: "Emergency vehicle",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        },
        {
            id: 1,
            icon: <FaChartLine />,
            title: "Leading Technology",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        }
    ]
    return (
        <div className='HomeAbout'>
            <div className='HomeAbout-main'>
                <div className="homeabout-box">
                    <div className="homeabout-right">
                        <img src="https://static.vecteezy.com/system/resources/previews/028/534/356/non_2x/attractive-female-doctor-medical-group-generative-ai-free-photo.jpeg" alt="" />
                    </div>
                    <div className="homeabout-left">
                        <h2>About us</h2>
                        <h3>We are trusted The Best Certificate Healthcare</h3>
                        <ul>
                            <li>Scientific skills for getting a better result</li>
                            <li>A good environment for work</li>
                            <li>Professional doctors</li>
                            <li>Digital laboratory</li>
                            <li>Emergency services</li>
                        </ul>
                        <div className="homeabout-button">
                            <Link to={"/about"}>About Us</Link>
                        </div>
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
