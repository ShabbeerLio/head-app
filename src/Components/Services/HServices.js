import React from 'react'
import "./HServices.css"
import { Link } from 'react-router-dom'
import cancer from "../../Assets/Services/cancer.png"
import liver from "../../Assets/Services/liver.png"
import kedney from "../../Assets/Services/kedney.png"
import cardiac from "../../Assets/Services/cardiac.png"
import neurology from "../../Assets/Services/neurology.png"
import orthopedic from "../../Assets/Services/Orthopedic.png"
import ServiceData from './ServicesData'

const HServices = () => {
    return (
        <div className='HServices'>
            <div className='HServices-main'>
                <div className="hservices-head">
                    <h2>Our Services</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, velit iusto libero consequatur dolorum doloremque voluptas voluptates atque repudiandae iste?</p>
                </div>
                <div className="hservices-body">
                    <div className="hsrevice-items">
                        {ServiceData.map((item) => (
                            <div className="hservices-card" key={item.id}>
                                <img src={item.image} alt="" />
                                <h3>{item.serviceName}</h3>
                                <p>{item.description}</p>
                                <div className="hservices-card-button">
                                    <Link>Read More</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HServices
