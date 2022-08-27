import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div>
        <div>
        <h1>Payment</h1>
        <h2>Successfully</h2>
        </div>
<Link to="/home">
        <button>back to home page</button></Link>


    </div>
  )
}

export default Success