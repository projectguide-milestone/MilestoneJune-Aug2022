import React from 'react'
import { Link } from 'react-router-dom'
import '../components/style/welcome.css'

const Welcome = () => {
  return (
    <div id='ma'>
      <div id="ma1" >
        <div className='lgb'>
          <Link to="/login">
          <button className='bt'>User Login</button></Link>
        </div>
        <div className='lgb1'>
        <Link to="/adminlogin">
          <button className='bt'>Admin Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Welcome