import React from 'react'
import "./Screening.css"
import screeningimg from "../../Assets/Screening/screeningtop.jpg"
import screeningimg1 from "../../Assets/Screening/Screenshot.webp"
import screeningimg2 from "../../Assets/Screening/Screening-Overview.webp"
import screeningimg3 from "../../Assets/Screening/Screening-Results.webp"
import screeningbrand from "../../Assets/Screening/ukk-logo.jpg"
import FreeTrial from '../../Components/FreeTrial/FreeTrial'

const Screening = () => {
    return (
        <div className='Screening'>
            <div className='Screening-main'>
                <div className="about-title">
                    <h1>Cognitive Screening</h1>
                    <p>Identifies deficits and assembles a customized training program to suit the client’s specific needs</p>
                </div>
                <div className="screening-box">
                    <div className="screening-box-left">
                        <h5>The Screenings are used for the early identification of individuals at potential risk for cognitive disorder, they indicate need for further evaluation or intervention and they are used to monitor the response to the intervention.</h5>
                        <p>HeadApps´ Screening battery consists of 7 clinically-validated short cognitive tests and 2 questionnaires. Patients can undergo the full suite of tests or perform individual specific tests.</p>
                        <p>The test battery identifies strengths and weaknesses in the areas of memory, attention, processing speed, working memory, executive functions, language, functional performance in activities of daily living, and mental well-being. This online cognitive screening battery shows how people score compared to people the same age and gender.</p>
                    </div>
                    <div className="screening-box-right">
                        <img src={screeningimg} alt="" />
                    </div>
                </div>
                <div className="screening-box2">
                    <h2>Screening battery overview</h2>
                    <div className="screening-box2-imag">
                        <img src={screeningimg1} alt="" />
                        <img src={screeningimg2} alt="" />
                    </div>
                    <h2>Screening results</h2>
                    <h5>The screenings are designed to assist the therapist in finding the most appropriate therapy modules.</h5>
                    <p>They can detect which cognitive deficit the patient may have and which degree of severity can be found. As a result, and this is of great added value, the system automatically recommends therapy modules that are most suitable to address the specific cognitive deficits of the client.</p>
                    <p>Each screening has its own specific minimum duration corresponding to the respective test goal. The screenings last between 2 to 6 minutes. The maximum total length of all screenings is about 45 minutes. Thanks to the color coding, the strengths and weaknesses of the clients can be seen in one view.</p>
                    <p>For every test, there are three parallel versions; however, to prevent the impact of learning effects, a test cannot be repeated within one month after its initial completion.</p>
                    <div className="screening-box2-imag">
                        <img src={screeningimg3} alt="" />
                    </div>
                    <h4>Results interpretation</h4>
                    <ul>
                        <li>with a percentile rank &lt;= 2% as “strongly impaired”</li>
                        <li>with a percentile rank &lt;= 7% as “impaired”</li>
                        <li>with a percentile rank &lt;= 16% as “lower average”</li>
                        <li>all other results as “normal” or better</li>
                    </ul>
                    <h4>Automatic therapy recommendation</h4>
                    <p>If the performance in a test is “lower average” or worse, suitable therapy modules are suggested. When the patient starts training, a level of difficulty is automatically selected that corresponds to the level of performance. If the training offers special setting options, these are carried out according to the test results.</p>
                    <h4>Special feature of the pathfinder test result “laterality” - neglect / hemianopsia indication</h4>
                    <p>If the pathfinder test detects a slowdown on the right or left visual field, this indicates a neglect or a hemianopsia. The basic setting of the patient is changed in accordance with the test results, as a result of which this information affects all therapy programs. If the result is “strongly impaired”, the optokinetic stimulation (OKS) is activated. If the patient cannot tolerate OKS, this must be deactivated manually in the “Patient-&gt; Edit” window.</p>
                    <p>The screening tests were developed by the University Hospital Cologne.</p>
                    <div className="screening-box2-imag">
                        <img src={screeningbrand} alt="" />
                    </div>
                    <p>The screening tests were developed by the renowned University Hospital Cologne / Germany. The standardization of these tests was conducted as part of Yalda Khani’s dissertation titled “TabScreen – A tablet-based screening for cognitive impairment” in 2019, at the Faculty of Medicine, University of Cologne, utilizing a sample size of 450 participants.</p>
                </div>
            </div>
            <FreeTrial />
        </div>
    )
}

export default Screening
