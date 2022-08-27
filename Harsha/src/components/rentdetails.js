import React from 'react'
import pic from '../components/pic1.jpg'
import './style/rentdetails.css'
import { useState } from 'react';
import  Axios  from 'axios';
import { Link } from 'react-router-dom';

const Rentdetails = () => {

  const {id} =useState();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [fdate, setFdate] = useState("");
  const [tdate, setTdate] = useState("");

  const addrent= () => {
      Axios.post('http://localhost:3001/rentcar', {
          id: id,
          name: name,
          address: address,
          phone_no: phone_no ,
          fdate: fdate,
          tdate: tdate
      }).then(() => {
          console.log('Successfully created client record.')
      }); 
  }

  return (
    <div>
         <div class="container">
      <center><h3><strong>Car Rental</strong></h3></center>
<div class="row">
  <div class="col-md-7 border-end">
    <form >
    {/* <input type="hidden" name="hidden_Rate" id="hidden_Rate" /> */}


    <p><strong>User Name : </strong></p> 
    <input onChange={(event)=> {setName(event.target.value)}} />
    <p><strong>Address : </strong></p> 
    <input onChange={(event)=> {setAddress(event.target.value)}} />
    <p><strong>Contact number: </strong></p>
     <input onChange={(event)=> {setPhone_no(event.target.value)}} /><br/> 
    <br></br>
    <h5><b>PERIOD:</b></h5>
    <p><strong>From:</strong></p> 
    <input type="date" onChange={(event)=> {setFdate(event.target.value)}}   /><br/> 
    <p ><strong>To:</strong></p> 
    <input type="date" onChange={(event)=> {setTdate(event.target.value)}} /><br/> 

    
    <p><strong>Estimated Price: 5000 <span ></span> /-</strong></p>
    <p><strong>Advance to be paid : 2500<span ></span> /-</strong></p>


<Link to="/payment">
    <button onClick={addrent}  class="btn btn-sm btn-outline-primary" >book</button></Link>



 
    </form>

  </div>
  <div class="col-md-5">
    <img src={pic} alt="" className='car1' />
  </div>
</div>
    </div>
    </div>
  )
}

export default Rentdetails