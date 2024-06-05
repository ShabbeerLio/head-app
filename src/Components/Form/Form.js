import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import "./Form.css"

const Form = (props) => {

    // form
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_number: '',
        message: ''
    });

    // Handle input changes and update the formData state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const [messageSent, setMessageSent] = useState(false); // Track whether the message has been sent

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        setMessageSent(true);

        setTimeout(() => {
            setMessageSent(false);
        }, 2500);

        emailjs.sendForm(
            'service_h4k5no9',
            'template_a1cepxh',
            form.current,
            '1s0j_F_KC5fcC_feN'
        )
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
            }, (error) => {
                console.log(error.text);
            });

        // Access the user's name, email, and message from the formData state
        const { user_name, user_number, user_email, message } = formData;

        console.log('Name:', user_name);
        console.log('Email:', user_email);
        console.log('Number:', user_number);
        console.log('Message:', message);

        setFormData({
            user_name: '',
            user_email: '',
            user_number: '',
            message: ''
        });
    };


    return (
        <>
            {/* <h4>Request a Free Consultation</h4> */}
            {messageSent ? (
                <div className='form-message'>
                    <p>Message sent successfully!</p>
                </div>
            ) : (
            <form className='form' ref={form} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        value={formData.name}
                        name="user_name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        value={formData.number}
                        name="user_number"
                        type="number"
                        className="form-control"
                        placeholder="Phone No."
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        value={formData.email}
                        name="user_email"
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        value={formData.message}
                        className="form-control"
                        name="message"
                        placeholder="Message"
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Book your Consultation
                </button>
            </form>
            )}
        </>
    )
}

export default Form
