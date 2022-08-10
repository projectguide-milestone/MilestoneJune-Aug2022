import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { Button } from "react-bootstrap";
import pic from "./WhatsApp Image.png";
import './style/Contact.css'

const FORM_ENDPOINT = "home"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      name="contact"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="form22"
    >
    <br/><br/>


<div>
  {/* <h1><b>Contact_Us</b></h1> */}
  <div classname="content11">
  <div className="kp"> 
                <h2>Contact Us</h2>
                <p>Got a question? We'd love to hear from you. send us a message and we'll respond as soon as possible.</p>
                    
                  <div>    
                          <h3>Address</h3>
                          <p>#98/3 laggere main road bangalore,
                              bangalore 560058</p>
                  </div> 
                  <div>
                            <h3>Phone No</h3>
                            <p>9740328112</p>
                  </div>
                </div>
            </div>
            

      <div>
        <input type="text" placeholder="Your name" classname="leftSide" required />
      </div>
      <div className="sub5">
        <input type="email" placeholder="Email" classname="rightSide" required />
      </div>
      <div >
        <textarea placeholder="Your message" classname="message" required />
      </div>
      <div>
        <Link to="#">
        <Button type="submit" className="bbut"> Send a message </Button></Link>
      </div>
      </div>
      <div className="pic"><img src={pic} alt="Paris" className="img"/></div>

    </form>
    
    
  );
};

export default ContactForm;