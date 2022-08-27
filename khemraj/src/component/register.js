import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './style/register.css';
import  profile from "./5087579.png";
// import email from "./email.png";
// import pass from "./lock.png";
import Axios from 'axios';
import { useState } from "react";



export const Register = () => {

  const [id] = useState(0);
  const [name, setName] = useState("");
  const [email_id, setEmail_id] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [password, setPassword] = useState(0);
  const [cpassword, setCpassword] = useState("");

  const addClientRecord = () => {
      Axios.post('http://localhost:3001/register', {
          id: id,
          name: name,
          email_id: email_id ,
          phone_no : phone_no ,
          password: password,
          cpassword: cpassword
      }).then(() => {
          console.log('Successfully created client record.')
      }); 
  }

  // const display = () => {
  //     console.log(id);
  //     console.log(name);
  //     console.log(email_id);
  // }


  return(
    <div className='main'>
      <div className='sub-main'>
        <div>
          <div className='imgs'>
            <div className='container-image'>
              <img src={profile} alt="profile" className="profile"/>
            </div> 


          </div>
          <div>
            <h1> Sign up </h1>
            <div>
              <input type="text" name="ClientId" onChange={(event)=> {setName(event.target.value)}}  placeholder="Name" className="name5"  required/>
            </div>
            <div className="second-input">
              <input type="email" name="ClientCompany" onChange={(event)=> {setEmail_id(event.target.value)}}placeholder="Email ID" className="name5" required/>
            </div>
            <div className="second-input">
              <input type="text"  name="TransactionId" onChange={(event)=> {setPhone_no(event.target.value)}} placeholder="Phone number" className="name5"  required/>
            </div>
            <div className="second-input">
              <input type="password"  name="TransactionId" onChange={(event)=> {setPassword(event.target.value)}} placeholder="password" className="name5" required/>
            </div>
            <div className="second-input">
              <input type="password"  name="TransactionId" onChange={(event)=> {setCpassword(event.target.value)}} placeholder="confirm password" className="name5" required/>
            </div>

            <div className="login-button">
            <button onClick={addClientRecord}>Sign up</button>
            </div>
            
            
              <p className="link10">
                <a href="/login">Already have an account ?</a> yes <a href="/login">Login here</a>
              </p>
            
          </div>


        </div>

      </div>
    </div>
  )
}

export default Register
