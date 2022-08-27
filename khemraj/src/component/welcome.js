import React from 'react'
import { Link } from 'react-router-dom'
import './style/welcome.css'

export const Welcome = () => {
  return (
  <form>
<div className='wel'>
  Welcome to Advertising Source Service
</div>
<div className="ww">
    <div class="welcome">
      <Link to="/login">
         <button type="submit" classname="bkhem">User login</button></Link>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='yy'></span>
         <Link to="/adminlogin">
         <button type="submit" classname="bkhem2">Admin login</button></Link>
      
     </div>
     </div>
  </form>
  )
}

export default Welcome