import React, { useState } from "react";

import pic from "./WhatsApp Image.png";
import axios from 'axios' 
import './style/Contact.css'


const ContactForm = () => {

  const [name, setName] = useState("")

  const [email, setEmail] = useState("")

  const [message, setMessage] = useState("")

  const sendname =() =>{
    if(name !== '' && email !== ''){
      if(message !== ''){
        axios.post('http://localhost:3001/insertmessage',{
          name:name,
          email:email,
          message:message
      }).then((response) => {
          alert ("updated")
      })
      }else { alert("Message is required")}
    }else { alert("Every field is required")}
    alert ("message sent succesfully")
  }



  return (
    <form >
    <br/><br/>


<div className="rrr">
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
       <span className="span">Name:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" onChange={(event)=>{setName(event.target.value)}} placeholder="Your name" id="cvcv" className="cvcv" required ></input>
      </div>
      <div className="sub8">
       <span className="span">Email: </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="email" onChange={(event)=>{setEmail(event.target.value)}} placeholder="Email" id="cvcv" className="cvcv" required ></input>
      </div>
      <div className="sub8">
       <span className="span">Message:</span> <textarea onChange={(event)=>{setMessage(event.target.value)}} placeholder="Your message" id="cvcv" className="cvcv" required ></textarea>
      </div>
      <div className="kbutt">
        
        <button onClick={sendname} className="bbbut"> Send a message </button>
      </div>
      </div>
      <div className="pic"><img src={pic} alt="Paris" className="img"/></div>

    </form>
    
    
  );
};

export default ContactForm;