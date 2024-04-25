import React from 'react'
import "./QualityCard.css"

const QualityCard = ({ detail }) => {
    return (
        <div className='QualityCard'>
            {detail.icon}
            <h3>{detail.title}</h3>
            <p>{detail.desc}</p>
        </div>
    )
}

export default QualityCard
