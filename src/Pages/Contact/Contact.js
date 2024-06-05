import React from "react";
import "./Contact.css";
import Form from "../../Components/Form/Form";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact-main">
        <div className="Contact-box">
          <div className="Contact-box-left">
            <Form />
          </div>
          <div className="Contact-box-right">
            <h5>Contact Us</h5>
            <h2>HeadApp</h2>
            <p>
              Please contact us with any questions about our solutions. Tell us
              about yourself and the issue you’re having and we’ll connect you
              with the right person to help you.
            </p>
            <div className="contact-detail-box">
              <ul>
                <li>
                  <Link>
                    <p>
                      <FaLocationDot />
                    </p>
                    <p>
                      Office No-816, NEXTRA The Address District Centre Mayur
                      Vihar Ph-1 Extn Delhi-110091
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="mailto: info@headapp.in">
                    <p>
                      <FaEnvelope />
                    </p>
                    <p>info@headapp.in</p>
                  </Link>
                </li>
                <li>
                  <Link to="tel:+91 8826557098">
                    <p>
                      <FaPhone />
                    </p>
                    <p>+91 8826557098</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
