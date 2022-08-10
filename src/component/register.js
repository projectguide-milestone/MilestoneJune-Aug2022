import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './style/register.css';
import  profile from "./WhatsApp Image 2021-12-24 at 9.05.31 AM.jpeg";
// import email from "./email.png";
// import pass from "./lock.png";



export const Register = () => {

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
              {/* <img src={email} alt="email" classname="email"/> */}
              <input type="text" placeholder="Name" className="name5"  required/>
            </div>
            <div className="second-input">
              {/* <img src={pass} alt="pass" classname="email"/> */}
              <input type="text" placeholder="Email" className="name5" required/>
            </div>
            <div className="second-input">
              {/* <img src={pass} alt="pass" classname="email"/> */}
              <input type="text" placeholder="Phone number" className="name5" required/>
            </div>
            <div className="second-input">
              {/* <img src={pass} alt="pass" classname="email"/> */}
              <input type="password" placeholder="password" className="name5" required/>
            </div>
            <div className="second-input">
              {/* <img src={pass} alt="pass" classname="email"/> */}
              <input type="password" placeholder="confirm password" className="name5" required/>
            </div>


            <div className="login-button">
              <Link to="/home">
            <button>Sign up</button></Link>
            </div>
            
            
              <p className="link">
                <a href="/">Already have an account ?</a> yes <a href="/">Login here</a>
              </p>
            
          </div>


        </div>

      </div>
    </div>
  )
}

export default Register
