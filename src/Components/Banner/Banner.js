import React, { useEffect } from 'react'
// import bannerimg from "../../Assets/Images/banner.webp"
import "./Banner.css"

import { FaHandHoldingMedical ,FaClockRotateLeft ,FaFileMedical } from "react-icons/fa6";
const Banner = () => {

    return (
        <>
            <div className="banner">
                <div className="banner-heading">
                </div>
                <div className="banner-image">
                    <img src="https://static.vecteezy.com/system/resources/previews/027/184/668/non_2x/asian-medical-team-transporting-elderly-patient-in-hospital-for-emergency-care-health-care-service-banner-free-photo.jpg" alt="" />
                </div>
                <div className="banner-bottom">
                    <div className="banner-items">
                        <div className="banner-card">
                            <FaHandHoldingMedical />
                            <div className="banner-card-detail">
                                <h4>Special Service</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nemo!</p>
                            </div>
                        </div>
                        <div className="banner-card">
                            <FaClockRotateLeft  />
                            <div className="banner-card-detail">
                                <h4>24/7 Advanced Care</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nihil.</p>
                            </div>
                        </div>
                        <div className="banner-card">
                            <FaFileMedical  />
                            <div className="banner-card-detail">
                                <h4>Get Result Online</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, quibusdam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
