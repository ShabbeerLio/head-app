import React from 'react'
import "./Clients.css"
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ClientsData from './ClientsData';
import Star from '../Review/Star';

const Clients = () => {

    const responsiveOptions = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 2,
        },
    };

    return (
        <div className='Clients'>
            <div className='Clients-main'>
                <div className="hservices-head">
                    <h2>Testimonials</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, velit iusto libero consequatur dolorum doloremque voluptas voluptates atque repudiandae iste?</p>
                </div>
                <div className="clients-box">
                    <ReactOwlCarousel
                        items={2}
                        nav={true}
                        dots={false}
                        responsive={responsiveOptions}
                    >
                        {ClientsData.map((item) => (
                            <div className="client-card">
                                <div className="client-card-head">
                                    <div className="client-head-imag">
                                        <img src={item.profile} alt="" />
                                    </div>
                                    <div className="client-head-title">
                                        <h2>{item.name}</h2>
                                        <p>{item.position}</p>
                                        <Star stars={4.5} />
                                    </div>
                                </div>
                                <p>{item.review}</p>

                            </div>
                        ))}
                    </ReactOwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Clients
