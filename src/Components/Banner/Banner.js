import React, { useEffect } from 'react'
import bannerimg from "../../Assets/Banner/banner1.jpeg"
import banner2 from "../../Assets/Banner/banner2.jpeg"
import "./Banner.css"
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { FaHandHoldingMedical, FaClockRotateLeft, FaFileMedical } from "react-icons/fa6";
const Banner = () => {

    return (
        <>
            <ReactOwlCarousel
                items={1}
                nav={false}
                dots={false}
                loop={Infinity}
            >
                <div className="banner">
                    <div className="banner-heading">
                        <h1>Computer-Aided Cognitive Rehabilitation</h1>
                    </div>
                    <div className="banner-image">
                        <img src={bannerimg} alt="" />
                    </div>
                </div>
                <div className="banner">
                    <div className="banner-heading">
                        <h1>Smart Cognitive Rehabilitation Solutions</h1>
                    </div>
                    <div className="banner-image">
                        <img src={banner2} alt="" />
                    </div>
                </div>
            </ReactOwlCarousel>
            {/* <div className="banner-bottom">
                    <div className="banner-items">
                        <div className="banner-card">
                            <FaHandHoldingMedical />
                            <div className="banner-card-detail">
                                <h4>Special Service</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nemo!</p>
                            </div>
                        </div>
                        <div className="banner-card">
                            <FaClockRotateLeft />
                            <div className="banner-card-detail">
                                <h4>24/7 Advanced Care</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nihil.</p>
                            </div>
                        </div>
                        <div className="banner-card">
                            <FaFileMedical />
                            <div className="banner-card-detail">
                                <h4>Get Result Online</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, quibusdam.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            {/* </div> */}
        </>
    )
}

export default Banner
