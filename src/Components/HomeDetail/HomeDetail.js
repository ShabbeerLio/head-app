import React from 'react'
import "./HomeDetail.css"
import { FaTrophy, FaRegSquareCheck, FaUserDoctor } from "react-icons/fa6";
import { TbCertificate } from "react-icons/tb";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'

const HomeDetail = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const countUpOptions = {
        start: 0,
        duration: 5,
        useEasing: true,
        separator: ',',
    };

    return (
        <div className='HomeDetail'>
            <div className='HomeDetail-main'>
                <div className="homedetail-box" ref={ref}>
                    <div className="homedetail-box-card">
                        <FaUserDoctor />
                        <h2>{inView ? <CountUp end={540} {...countUpOptions} /> : 0}</h2>
                        <p>Expert Doctors</p>
                    </div>
                    <div className="homedetail-box-card">
                        <FaRegSquareCheck />
                        <h2>{inView ? <CountUp end={990} {...countUpOptions} /> : 0}</h2>
                        <p>Successful Story</p>
                    </div>
                    <div className="homedetail-box-card">
                        <FaTrophy />
                        <h2>{inView ? <CountUp end={3500} {...countUpOptions} /> : 0}</h2>
                        <p>Global Presence</p>
                    </div>
                    <div className="homedetail-box-card">
                        <TbCertificate />
                        <h2>{inView ? <CountUp end={54} {...countUpOptions} /> : 0}</h2>
                        <p>Experiences</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDetail
