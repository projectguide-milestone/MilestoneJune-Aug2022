import React from 'react'
import { Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import './Home.css'
// import NavbarBS from '../NavigationBar/NavbarBS';

function Home() {
  const history= useNavigate();
  return (
     <div  className="Home" >
      
        <h1 className='HomeTitle'>Welcome to accounting system</h1>
        <Button className="home-btn" onClick={()=>history('/Login')}>Get Started</Button>
  
    </div>
  )
}

export default Home