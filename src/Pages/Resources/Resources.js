import React from 'react'
import "./Resources.css"
import { Link } from 'react-router-dom'
import res1 from "../../Assets/Resources/Fill-The-Need-5-5f8fce44.webp"
import res2 from "../../Assets/Resources/resource1.jpg"
import res3 from "../../Assets/Resources/resource2.webp"
import res4 from "../../Assets/Resources/resource3.jpg"
import FreeTrial from '../../Components/FreeTrial/FreeTrial'

const Resources = () => {
    return (
        <div className='Resources'>
            <div className='Resources-main'>
                <div className='resources-box'>
                    <div className="resources-left">
                        <h5>Resource Center</h5>
                        <h2>It is our mission to support you all the way through!</h2>
                    </div>
                    <div className="resources-right">
                        <h5>Our mission is to provide training, technical assistance, continuing education, and networking opportunities. These resource center pages provide self-service technical support resources and a variety of ways to get answers to the most commonly asked questions.</h5>
                    </div>
                </div>
                <div className='resources-box2'>
                    <div className="resources-card">
                        <img src={res2} alt="" />
                        <div className="resources-card-detail">
                            <h3>Quick Start Guide – Therapist</h3>
                            <p>If you are already registered for the 14-day trial period or already have a licensed HeadApp account, please read the following step-by-step instruction carefully to get started.</p>
                            <div className="resources-detail-button">
                                <Link to={"https://neurozip.com/wp-content/uploads/2022/09/Quick-Start-Guide-for-Therapists.pdf"}>Download</Link>
                            </div>
                        </div>
                    </div>
                    <div className="resources-card">
                        <img src={res3} alt="" />
                        <div className="resources-card-detail">
                            <h3>Patient’s Guide for Home Training</h3>
                            <p>Please provide your patients with this step-by-step guide to get started with the home training. In this writable pdf you can also enter the login data for your patient.</p>
                            <div className="resources-detail-button">
                                <Link to={"https://neurozip.com/wp-content/uploads/2022/02/neurozip-patients-guide-home-training.pdf"}>Download</Link>
                            </div>
                        </div>
                    </div>
                    <div className="resources-card">
                        <img src={res4} alt="" />
                        <div className="resources-card-detail">
                            <h3>HeadApp Programs at a Glance</h3>
                            <p>This is a screening and therapy overview, therapy goals and purposes . Train with HeadApp, make use of your possibilities and have fun!</p>
                            <div className="resources-detail-button">
                                <Link to={"https://neurozip.com/wp-content/uploads/2022/08/Screening-and-Therapy-Overview.pdf"}>Download</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='resources-box3'>
                    <div className="resources-box3-left">
                        <img src={res1} alt="" />
                    </div>
                    <div className="resources-box3-right">
                        <h2>Join Our Next HeadApp Webinar</h2>
                        <h5>Computer-Aided Cognitive Rehabilitation Introduction</h5>
                        <p>Fri, May 24, 2024, 12:00 pm – 1:00 pm ET (USA/Canada) — In this webinar, attendees will be introduced to HeadApp, learn more about its distinctive features, along with how to implement the program in a neuro-rehabilitation setting. In-Clinic and Telerehabilitation.</p>
                        <div className="resources-box3-right-button">
                            <Link to={"https://neurozip.com/webinars/"}>Register Now</Link>
                        </div>
                    </div>
                </div>
                <div className='resources-box4'>
                    <h1>Video Presentations</h1>
                    <h2>Introduction to HeadApp</h2>
                    <h5>In this video, you will be introduced to HeadApp, learn more about its distinctive features, along with how to implement the program in a rehabilitation setting.</h5>
                    <iframe width="750" height="422" src="https://www.youtube.com/embed/nt6ednRLMlU" title="HeadApp - Cognitive Rehabilitation | Introduction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h2>HeadApp A Powerful ADHD Solution</h2>
                    <h5>Improve Learning, Increase Attention and Working Memory, utilizing the brain’s ability to learn new skills and behaviors through dedicated training</h5>
                    <iframe width="750" height="422" src="https://www.youtube.com/embed/onWy43_ruQA" title="HeadApp - A Powerful ADHD Solution" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h2>HeadApp in major psychiatric disorders</h2>
                    <h5>Eye-Movement Desensitization and Reprocessing Therapy (EMDR) combined with HeadApp – Cognitive Remediation</h5>
                    <p>Alfred Borrelli | Psychotherapist | New Jersey / New York City</p>
                    <p>Cognitive impairment is an important factor contributing to poorer functional outcome in major psychiatric disorders. Impaired cognitive capabilities are regularly found in several domains, that is, Attention, Working Memory, Memory, Learning, Social Cognition, and Executive Functions.</p>
                    <p>EMDR therapy facilitates the accessing and processing of traumatic memories and other adverse life experiences to bring these to an adaptive resolution.</p>
                    <p>Computerized cognitive remediation with HeadApp has been shown to be effective in improving both cognition and functioning.</p>
                    <p>Elimination of emotional distress and improving cognition leads to improved patient outcomes!</p>
                    <iframe width="750" height="422" src="https://www.youtube.com/embed/2TNIw8a1W1U" title="EMDR &amp; HeadApp | Combination Therapy | Traumatic Memories" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <FreeTrial />
        </div>
    )
}

export default Resources
