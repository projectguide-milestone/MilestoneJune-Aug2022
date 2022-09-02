import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
import '../style/login.css'
import  profile from "../5087579.png";


export const Adminlogin = () => {

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
                <h1>Admin Login</h1>
                <div className="name3">
          
                  <input /*onChange={(event)=> {setName(event.target.value)}} */placeholder=" Admin Id" className="name10" required/>
                </div>
                <div className="second-input">
                 
                  <input /*onChange={(event)=> {setId(event.target.value)}} */placeholder="Password" className="name10" required/>
                </div>
    
    
                <div className="login-button1">
                  <Link to="/adminhome">
                <button className="but" /*onClick={addRecord}*/>login</button></Link>
                </div>
{/*                 
                  <p className="link1">
                    <a href="forgot">Forgot password?</a> or <a href="register">Sign up</a>
                  </p> */}

                  <p></p>
                
              </div>
    
    
            </div>
    
          </div>
        </div>
      )

}

export default Adminlogin