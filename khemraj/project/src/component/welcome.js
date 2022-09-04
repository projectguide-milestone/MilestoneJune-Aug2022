import React from 'react'
import { Link } from 'react-router-dom'
import './style/welcome.css'
import pic from './pizzaparty1.png'

export const Welcome = () => {
  return (
  <form>
<div className='wel'>
  Welcome to Advertising Source Service
</div>
<div className="ww">
    <div class="welcome">
    <img src={pic} alt='' className='img12'></img>
    <span className='yy'></span>

      <Link to="/google">
         <button type="submit" classname="bkhem">login here</button>
         </Link>

      
     </div>
     </div>
  </form>
  )
}

export default Welcome