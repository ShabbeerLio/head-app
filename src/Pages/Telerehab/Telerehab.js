import React from 'react'
import "./Telerehab.css"
import imag1 from "../../Assets/Telerehab/icon.png"
import imag2 from "../../Assets/Telerehab/icon (1).png"
import imag3 from "../../Assets/Telerehab/icon (2).png"
import imag4 from "../../Assets/Telerehab/telerehab2.jpg"
import imag5 from "../../Assets/Telerehab/telerehab1.jpg"
import imag6 from "../../Assets/Telerehab/telerehapb.jpg"
import imag7 from "../../Assets/Telerehab/Therapy-plan-7ed89050.webp"
import imag8 from "../../Assets/Telerehab/Schedule-plan-by-training-day-b76dac30.webp"
import FreeTrial from '../../Components/FreeTrial/FreeTrial'


const Telerehab = () => {

    const StepData = [
        {
            stepNumber: 1,
            title: "Initiate Therapy Plan",
            details: [
                {
                    detail: "Click on the 'Therapy plan' button to start the process."
                }
            ]
        },
        {
            stepNumber: 2,
            title: "Calendar Planning",
            details: [
                {
                    detail: "Access calendar.",
                },
                {
                    detail: "Utilize available exercises on the right.",
                },
                {
                    detail: "Set a training duration below the module list, valid for all programs.",
                },
                {
                    detail: "Easily schedule training programs by dragging and dropping."
                },
            ]
        },
        {
            stepNumber: 3,
            title: "Customization Settings",
            details: [
                { detail: "Click on assigned programs for customization." }]
        },
        {
            stepNumber: 4,
            title: "Prescription Transfer",
            details: [
                { detail: "Transfer the therapy plan by clicking 'Use plan' and 'Save.'" }]
        },
        {
            stepNumber: 5,
            title: "Access at Home",
            details: [
                {

                    detail: "User connect from home using their e-mail address and personal password provided by the therapist to access and engage in the planned activities."
                }
            ]
        },
        {
            stepNumber: 6,
            title: "Automated Progress Tracking",
            details: [
                {
                    detail: "HeadApp records automatically session results."
                },
                {
                    detail: "Therapists gain insights into patient progress."
                },
                {
                    detail: "Therapists can evaluate and customize training setup for ongoing improvement."
                },

            ]
        }
    ]
    return (
        <div className='Telerehab'>
            <div className='Telerehab-main'>
                <div className="about-title">
                    <h1> Telerehabilitation </h1>
                    <h5>Would you like to assign cognitive homework, expand your patient reach, and strengthen loyalty to your practice?</h5>
                    <p>This is your solution! Explore the therapy plan feature seamlessly integrated into HeadApp, available to you at no additional cost.</p>
                </div>
                <div className="telerehab-box">
                    <div className="telerehab-box-card">
                        <img src={imag1} alt="" />
                        <h5>Extended Flexibility</h5>
                        <p>Applying HeadApp enhances accessibility to patients, reinforcing face-to-face clinic activities with extended flexibility, culminating in a comprehensive approach to personalized and effective cognitive recovery.</p>
                    </div>
                    <div className="telerehab-box-card">
                        <img src={imag2} alt="" />
                        <h5>Streamline Progress</h5>
                        <p>The HeadApp “therapy plan” for distance treatment ensures consistent progress by eliminating disruptions from factors such as distance and transportation issues, addressing geographical challenges, and providing flexibility and convenience.</p>
                    </div>
                    <div className="telerehab-box-card">
                        <img src={imag3} alt="" />
                        <h5>Included at No Extra Fees, Unlimited Patients</h5>
                        <p>Extend your therapeutic reach to an unlimited number of patients, enhancing accessibility and providing comprehensive care. Provide cognitive rehabilitation without the burden of extra costs – it’s all included in HeadApp.</p>
                    </div>
                </div>
                <div className="telerehab-box2">
                    <div className="telerehab-box2-card">
                        <img src={imag4} alt="" />
                        <div className="telerehab-card-detail">
                            <h5>Advantages for Clinicians</h5>
                            <p>Optimize Patient Reach: Enhance accessibility to patients, reinforcing office activities with extended flexibility.</p>
                            <p>Expand your business capacity: Manage the rehabilitation of patients from various regions.</p>
                            <p>Efficient Time Management: Minimize downtime and travel for focused interventions, optimizing therapeutic time.</p>
                            <p>Controlled and Personalized Remote Interventions: Conduct remote interventions with precision. Effortlessly generate personalized therapy plans with the option for immediate or later access to training results.</p>
                            <p>Redefine Therapy Based on Progress: Tailor therapy to individual progress, fostering continuous and scheduled improvement.</p>
                        </div>
                    </div>
                    <div className="telerehab-box2-card">
                        <img src={imag5} alt="" />
                        <div className="telerehab-card-detail">
                            <h5>Advantages for Your Patients</h5>
                            <p>Continuity of Care: Seamless transition for uninterrupted rehabilitation.</p>
                            <p>Convenience and Accessibility: Access therapy from home, anytime, fostering flexibility.</p>
                            <p>Adherence and Progress: Promote adherence to treatment plans, ensuring consistent progress.</p>
                            <p>Mobility Solutions: Avoid travel challenges, especially beneficial for those with mobility issues.</p>
                            <p>Enhanced Engagement: Create a comfortable environment at home, contributing to better outcomes.</p>
                        </div>
                    </div>
                </div>
                <div className="telerehab-box3">
                    <h5>HeadApp’s Therapy Plan Solution</h5>
                    <h2>How does remote cognitive rehabilitation work with HeadApp? Here’s a step-by-step breakdown.</h2>
                    <img src={imag6} alt="" />
                    <div className="telerehab-box3-items">
                        {StepData.map((item, index) => (
                            <div className="telerehab-box3-card" key={item.index}>
                                <h5>{item.stepNumber} {item.title}</h5>
                                {item.details.map((i) => (
                                    <ul>
                                        <li>{i.detail}</li>
                                    </ul>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="telerehab-box3">
                    <h2>Schedule plan by date</h2>
                    <img src={imag7} alt="" />
                    <h2>Schedule plan by training day (30 days)</h2>
                    <img src={imag8} alt="" />
                </div>
            </div>
            <FreeTrial/>
        </div>
    )
}

export default Telerehab
