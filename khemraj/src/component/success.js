import React from 'react'
import { Link } from 'react-router-dom'
import './style/details.css'

const Success = () => {
  return (
    <div className='sucess'>
        <div  className='profilS'>
          <div>
        <h1>Payment</h1>
        <h2>Successfully</h2>
        </div>
        <div className='page'>
<Link to="/home">
        <button className='but1'>back to page</button></Link>
        </div>
        </div>

    </div>
  )
}

export default Success