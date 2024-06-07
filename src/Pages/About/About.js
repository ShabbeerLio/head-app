import React from 'react'
import "./About.css"
import about1 from "../../Assets/About/About1.webp"
import about2 from "../../Assets/About/About2.webp"
import about3 from "../../Assets/About/About3.webp"
import about4 from "../../Assets/About/About4.webp"
import screen1 from "../../Assets/About/Screen1.webp"
import screen2 from "../../Assets/About/Screen2.webp"
import screen3 from "../../Assets/About/Screen3.webp"
import FreeTrial from '../../Components/FreeTrial/FreeTrial'
// import { Link } from 'react-router-dom'
// import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const About = () => {
    return (
        <div className='About'>
            <div className='About-main'>
                <div className="about-title">
                    <h1>About Us</h1>
                </div>
                <div className="about-box">
                    <div className="about-box-left">
                        <h2>Cognitive therapy - in clinic, practice, and at home</h2>
                        <p>Professionals consistently opt for HeadApp as their premier choice in computer-aided cognitive rehabilitation, thanks to its outstanding performance in clinical settings, private practices, rehabilitation centers, mobile applications, and remote in-home rehabilitation via the internet.</p>
                        <p>The system provides deficit specific, highly effective therapy for patients with cognitive impairments resulting from stroke, TBI, inflammatory, autoimmune, neurodegenerative diseases and cognitive deficits associated with psychiatric diseases.</p>
                        <p>HeadApp addresses memory, working memory, attention, reaction and impulse control, planning and problem solving, spatial cognition, language and everyday functions. HeadApp provides both an In-clinic solution and a telerehabilitation solution for home patients. The web-based application can be used on any internet enabled computer or tablet. No install process needed!</p>
                    </div>
                    <div className="about-box-right">
                        <img src={about1} alt="" />
                    </div>
                </div>
                <div className="about-box">
                    <div className="about-box-right">
                        <img src={about2} alt="" />
                    </div>
                    <div className="about-box-left">
                        <h2>Programs and features</h2>
                        <h5>Comprehensive suite of 7 screening tests, 2 questionnaires, and 23 training programs.</h5>
                        <p>The screenings and questionnaires are designed to assist the therapist in finding the most appropriate therapy modules. They can detect which cognitive deficit the patient may have and which degree of severity can be found. The system automatically recommends therapy modules most suitable to address the specific cognitive deficits of the client.</p>
                        <p>23 computerized training programs modules are available to help your patients improve cognitive function and compensatory skills in Attention, Information Processing Speed, Reaction and Impulse Control, Working Memory, Memory, Spatial Cognition, Language, and Executive Functions.</p>
                    </div>
                </div>
                <div className="about-box">
                    <div className="about-box-left">
                        <h2>For all stages of rehabilitation </h2>
                        <p>HeadApp is suitable for all stages of rehabilitation and can be assigned according to each patient’s level of deficit from mild to severe.</p>
                        <p>After starting a therapy session, HeadApp adapts the level of difficulty automatically to the patient’s performance. It’s not necessary to care for the patient all the time, HeadApp leads the patient, instructs and gives feedback.</p>
                        <p>The patient progress is automatically tracked and monitored while the clinician is able to deliver services to a greater number of clients – increasing both client treatment efficacy and clinician efficiency.</p>
                    </div>
                    <div className="about-box-right">
                        <img src={about3} alt="" />
                    </div>
                </div>
            </div>
            <FreeTrial />
            <div className='About-main'>
                <div className="about-box2">
                    <img src={about4} alt="" />
                    <div className="about-box2-items">
                        <div className="about-box2-card">
                            <img src={screen1} alt="" />
                            <div className="about-box2-card-detail">
                                <h5>Screen your patient</h5>
                                <p>Assess which cognitive deficits the patient may have and which degree of severity can be found.</p>
                            </div>
                        </div>
                        <div className="about-box2-card">
                            <img src={screen2} alt="" />
                            <div className="about-box2-card-detail">
                                <h5>Proceed recommended training protocol</h5>
                                <p>Based on the screening results, a personalized training recommendation will be automatically displayed with a battery of the most suitable training programs.To achieve the best results, the following training duration and frequency is recommended: 20 to 45 minutes per day, 3 to 5 days per week.</p>
                            </div>
                        </div>
                        <div className="about-box2-card">
                            <img src={screen3} alt="" />
                            <div className="about-box2-card-detail">
                                <h5>Monitor and track results</h5>
                                <p>Track progresss by evaluating results, success of the therapy can be monitored by repeating the screenings.For every test, there are three parallel versions; however, to prevent the impact of learning effects, a test cannot be repeated within one month after its initial completion.</p>
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
