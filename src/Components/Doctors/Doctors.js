import React from 'react'
import "./Doctors.css"
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import DoctorsData from './DoctorsData';

const Doctors = () => {
    const responsiveOptions = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    };
    return (
        <div className='Doctors'>
            <div className='Doctors-main'>
                <div className="hservices-head">
                    <h2>Our Doctors</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, velit iusto libero consequatur dolorum doloremque voluptas voluptates atque repudiandae iste?</p>
                </div>
                <div className="doctors-box">
                    <ReactOwlCarousel
                        items={3}
                        nav={true}
                        dots={false}
                        responsive={responsiveOptions}
                    >
                        {DoctorsData.map((item) => (
                            <div className="doctors-card" key={item.id}>
                                <div className="doctor-card-imag">
                                    <img src={item.profile} alt="" />
                                </div>
                                <h3>{item.name}</h3>
                                <h5>{item.spec}</h5>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </ReactOwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Doctors
