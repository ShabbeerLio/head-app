import React from 'react'
import "./Therapeutic.css"
import therapy1 from "../../Assets/Therapeutic/Therapeutic.webp"
import therapy3 from "../../Assets/Therapeutic/Neurodevelopmental.jpg"
import therapy4 from "../../Assets/Therapeutic/Psychiatric.webp"
import FreeTrial from '../../Components/FreeTrial/FreeTrial'

const Therapeutic = () => {
    return (
        <div className='Therapeutic'>
            <div className='Therapeutic-main'>
                <div className="about-title">
                    <h1> Therapeutic focus areas</h1>
                </div>
                <div className="therapeutic-box">
                    <div className="therapeutic-box-left">
                        <div className="therapeutic-box-card">
                            <h4>Neurological and neurodegenerative impairments and diseases</h4>
                            <ul>
                                <li>Stroke</li>
                                <li>Traumatic Brain Injury (TBI)</li>
                                <li>Multiple Sclerosis</li>
                                <li>Mild Cognitive Impairment (MCI)</li>
                                <li>Dementia</li>
                                <li>Post-acute sequelae of COVID-19 (PASC)</li>
                                <li>Cerebral palsy (CP) with cognitive deficits</li>
                                <li>Cognitive symptoms post Chemotherapy</li>
                            </ul>
                        </div>
                        <div className="therapeutic-box-card">
                            <h4>Neurodevelopmental disorder</h4>
                            <ul>
                                <li>ADHD</li>
                            </ul>
                            <h4>Psychiatric disorders</h4>
                            <ul>
                                <li>Depression</li>
                                <li>Schizophrenia</li>
                                <li>Auditory hallucinations</li>
                                <li>Addiction disease</li>
                                <li>and others</li>
                            </ul>
                        </div>
                    </div>
                    <div className="therapeutic-box-right">
                        <img src={therapy1} alt="" />
                    </div>
                </div>
                <h2>Neurological and neurodegenerative impairments and diseases</h2>
                <div className="therapeutic-box">
                    <div className="therapeutic-box-right">
                        <ul>
                            <li>Stock</li>
                            <li>Traumatic Brain Injury (TBI)</li>
                            <li>Concussion</li>
                            <li>Mild Cognitive Impairment (MCI)</li>
                            <li>Multiple Sclerosis</li>
                            <li>Parkinson's disease</li>
                            <li>Dementia</li>
                            <li>Post-acute sequelae of COVID-19 (PASC)</li>
                            <li>Cerebral palsy (CP) with cognitive deficits</li>
                            <li>Cognitive symptoms post Chemotherapy</li>
                        </ul>
                    </div>
                    <div className="therapeutic-box-left">
                        <div className="therapeutic-box2-card">
                            <h5>Stock</h5>
                            <p>Cognitive deficits play a significant role in stroke rehabilitation, affecting various aspects of cognitive function, including memory, speech, executive functions, as well as motor and visual skills. Stroke stands as the foremost cause of disability in the United States, afflicting 800,000 individuals annually. Fortunately, advancements in stroke treatments have increased survival rates, offering hope for recovery. Tailored therapies and goal-driven programs can help individuals overcome the impact of stroke. Within this context, computer-aided cognitive training emerges as a valuable tool, aiding in the rehabilitation process and fostering cognitive improvement. </p>
                        </div>
                    </div>
                </div>
                <h2>Neurodevelopmental disorder</h2>
                <div className="therapeutic-box">
                    <div className="therapeutic-box-right">
                        <img src={therapy3} alt="" />
                    </div>
                    <div className="therapeutic-box-left">
                        <div className="therapeutic-box2-card">
                            <h5>ADHD</h5>
                            <p>Attention-deficit/hyperactivity disorder  (ADHD) is one of the most common neurodevelopmental disorders of childhood. ADHD is often first identified in school-aged children when it leads to disruption in the classroom. Children with ADHD may have trouble paying attention, controlling impulsive behaviors, or be overly active. ADHD can last into adulthood. Some adults have ADHD but have never been diagnosed. The symptoms can cause difficulty at work, at home, or with relationships. Symptoms may look different at older ages, for example, hyperactivity may appear as extreme restlessness. Symptoms can become more severe when the demands of adulthood increase.</p>
                        </div>
                    </div>
                </div>
                <h2>Psychiatric disorders</h2>
                <div className="therapeutic-box">
                    <div className="therapeutic-box-left">
                        <div className="therapeutic-box2-card">
                            <p>Deficits in cognitive function – ranging from decreased attention and working memory to disrupted social cognition and language – are common in psychiatric disorders.</p>
                            <p>Computer-aided cognitive remediation therapy was found to improve and correct cognitive performance and real-life functioning.</p>
                            <p>Psychiatric disorders are associated with complex and disease specific patterns of cognitive impairment. Certain cognitive impairments can be improved, rectified or compensated. A brief overview of the main characteristics of cognitive impairment in psychiatric disorders are displayed in this table.</p>
                        </div>
                    </div>
                    <div className="therapeutic-box-right">
                        <img src={therapy4} alt="" />
                    </div>
                </div>
            </div>
            <FreeTrial />
        </div>
    )
}

export default Therapeutic
