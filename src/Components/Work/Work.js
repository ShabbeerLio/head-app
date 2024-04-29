import React from 'react'
import "./Work.css"
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import WorkData from './WorkData';

const Work = () => {

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
        <div className='Work'>
            <div className='Work-main'>
                <div className="hservices-head">
                    <h2>Our Work</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, velit iusto libero consequatur dolorum doloremque voluptas voluptates atque repudiandae iste?</p>
                </div>
                <div className="work-box">
                    <ReactOwlCarousel
                        items={3}
                        nav={true}
                        dots={false}
                        responsive={responsiveOptions}
                    >
                        {WorkData.map((item) => (
                            <div className="work-card" key={item.id}>
                                <div className="work-card-imag">
                                    <img src={item.profile} alt="" />
                                </div>
                                <div className="work-card-detail">
                                    <p>{item.icon}</p>
                                    <h3>{item.name}</h3>
                                </div>
                                <div className="work-card-bottom">
                                    <h5>{item.name}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </ReactOwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Work
