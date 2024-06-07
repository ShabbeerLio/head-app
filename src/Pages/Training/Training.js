import React, { useState } from 'react'
import "./Training.css"
// import Tr1 from "../../Assets/Training/Attention-Overview-5b763aaf.jpg"
// import Tr2 from "../../Assets/Training/Working-Memory-Overview-2-7bead1c6.jpg"
// import Tr3 from "../../Assets/Training/Memory-Overview-647d9b5a.jpg"
// import Tr4 from "../../Assets/Training/Daily-Living-Overview-836f0b69.jpg"
// import Tr5 from "../../Assets/Training/Language-Ovierview-0afae473.jpg"
import TrainingData from './TrainingData'
import FreeTrial from '../../Components/FreeTrial/FreeTrial'

const Training = () => {
    const data = [
        {
            id: 1,
            Attention: 'Reaction and Impuls Control',
            Working: "Working Memory N-Back",
            Language: 'Word Usage',
            Memory: "Learning and Memory Strategies",
            Executive: "Time Anticipation"
        },
        {
            id: 2,
            Attention: 'Attention and Focus',
            Working: "Verbal Working Memory",
            Language: 'Sentence Structure',
            Memory: "Topological Short-Term Memory",
            Executive: "Logical Reasoning Anticipation"
        },
        {
            id: 3,
            Attention: 'Attention and Flexibility',
            Working: "Visual Working Memory",
            Language: 'Language Sequences',
            Memory: "Semantic Short-Term Memory and Delayed Recall",
            Executive: "Planing Problem Solver"
        },
        {
            id: 4,
            Attention: 'Spatial ognition',
            Working: "Verbal-Visual Working Memory",
            Language: 'Language Reasoning',
            Memory: "Figural Short-Term Memory",
            Executive: "Daily Activity Oriented Training"
        },
        {
            id: 5,
            Attention: 'Divided Attention',
            Working: "Working Memory 17+4[Black jack]",
            Language: 'World Finding and Production',
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState(TrainingData[0]);

    return (
        <div className='Training'>
            <div className='Training-main'>
                <div className="about-title">
                    <h1>Cognitive Training Programs</h1>
                </div>
                <div className="training-box">
                    <h2>Comprehensive Cognitive and Language Enhancement Suite</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Attention</th>
                                <th>Working Memory</th>
                                <th>Language</th>
                                <th>Memory</th>
                                <th>Executive Function</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.Attention}</td>
                                    <td>{item.Working}</td>
                                    <td>{item.Language}</td>
                                    <td>{item.Memory}</td>
                                    <td>{item.Executive}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="training-box">
                    <h2>Cognitive training that’s tailored to individual needs</h2>
                    <p>Cognitive training is important for improving cognitive abilities, maintaining cognitive health, managing impairments, promoting brain plasticity, and supporting mental well-being.</p>
                    <p>HeadApp assists the therapist in the rehabilitation of cognitive disorders that affect specific aspects of attention, concentration, impulse control, working memory, memory, perception, language, activities of daily living and much more. By solving tasks, brain processes will be activated, and important brain functions will be improved or restored.</p>
                    <p>Languages: Within the software, you can choose from 13 languages: English, Spanish, German, French, Polish, Italian, Portuguese, Turkish, Korean, Czech, Slovak, Latvian, and Lithuanian.</p>
                </div>
                <h2>Therapy programs at a glance</h2>
                <div className="training-box">
                    <div className="training-categorty">
                        {TrainingData.map((category, index) => (
                            <p key={index} onClick={() => setSelectedCategory(category)}>
                                {category.name}
                            </p>
                        ))}
                    </div>
                    <div className="training-category-items">
                        <h5>{selectedCategory.name} Programs</h5>
                        <p>{selectedCategory.description}</p>
                        <div className="training-category-image">
                            <img src={selectedCategory.image} alt={selectedCategory.name} />
                            <img src={selectedCategory.table} alt={selectedCategory.name} />
                        </div>
                    </div>
                </div>
            </div>
            <FreeTrial />
        </div>
    )
}

export default Training
