import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
import './style/forget.css'
import  profile from "./WhatsApp Image 2021-12-24 at 9.05.31 AM.jpeg";
// import email from "./email.png";
// import pass from "./lock.png"



export const Forgot = () => {

  return(
    <div className='main10'>
      <div className='sub-main10'>
        <div>
          <div className='img10'>
            <div className='container-image10'>
              <img src={profile} alt="profile" className="profile10"/>
            </div>


          </div>
          <div>
            <h1 className='hh1'> Forgot password</h1>
            <div>
              {/* <img src={email} alt="email" classname="email"/> */}
              <input type="text" placeholder="Email Id" className="name10" required/>
            </div>


            <div className="login-button10">
              <Link to="/otp">
            <button>Confirm</button></Link>
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Forgot
