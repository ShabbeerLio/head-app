import React from 'react'
import "./HomeContact.css"
import contactimg from "../../Assets/Contact/contact.jpg"
import Form from '../Form/Form'


const HomeContact = () => {
    return (
        <div className='HomeContact'>
            <div className='HomeContact-main'>
                <div className="homecontact-left">
                    <img src={contactimg} alt="" />
                </div>
                <div className="homecontact-right">
                    <div className="homecontact-right-box">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContact
