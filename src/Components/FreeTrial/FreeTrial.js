import React from 'react'
import "./FreeTrial.css"
import freeimg from '../../Assets/Freetrial/freetrial.webp'
import { Link } from 'react-router-dom'

const FreeTrial = () => {
    return (
        <div className='FreeTrial'>
            <div className='FreeTrial-main'>
                <div className="freetrail-left">
                    <h3>FREE TRIAL for 14 days</h3>
                    <p>No Credit Card required / No Obligation</p>
                    <p>Explore everything from screenings to cognitive training and language exercises, embracing every opportunity along the way. </p>
                    <div className="freetrial-button">
                        <Link to={"https://start-headapp.helferservices.net/"}>Start HeadApp</Link>
                    </div>
                </div>
                <div className="freetrail-right">
                    <img src={freeimg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default FreeTrial
