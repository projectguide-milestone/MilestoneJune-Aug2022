import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
import './style/login.css'
import  profile from "./WhatsApp Image 2021-12-24 at 9.05.31 AM.jpeg";
// import  Axios from 'axios';
// import { useState } from 'react';




export const Login = () => {

// const [id, setId] = useState(0)
// const [accountname, setAccountname] = useState("")

// const addRecord = () => {
//   Axios.post('http://localhost:3001/home',{
//     id: id,
//   }).then(() => {
//     console.log('successfully created client record.')
//   });
// }

  return(
    <div className='main1'>
      <div className='sub-main1'>
        <div>
          <div className='img1'>
            <div className='container-image22'>
              <img src={profile} alt="profile" className="profile"/>
            </div>


          </div>
          <div>
            <h1> Login</h1>
            <div className="name3">
              {/* <img src={email} alt="email" classname="email"/> */}
              <input /*onChange={(event)=> {setId(event.target.value)}}*/ placeholder=" User name" className="name10" required/>
            </div>
            <div className="second-input">
              {/* <img src={pass} alt="pass" classname="email"/> */}
              <input /*onChange={(event)=> {setId(event.target.value)}} */placeholder="Password" className="name10" required/>
            </div>


            <div className="login-button1">
              <Link to="Home">
            <button className="but">login</button></Link>
            </div>
            
              <p className="link1">
                <a href="forgot">Forgot password?</a> or <a href="register">Sign up</a>
              </p>
            
          </div>


        </div>

      </div>
    </div>
  )
}

export default Login
