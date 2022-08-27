import React from 'react'
import { useState } from 'react';
import  Axios  from 'axios';
import '../components/style/signup.css'

const Signup = () => {


  const [id] = useState(0);
  const [name, setName] = useState("");
  const [email_id, setEmail_id] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [password, setPassword] = useState(0);
  const [cpassword, setCpassword] = useState("");

  const addClientRecord = () => {
      Axios.post('http://localhost:3001/create', {
          id: id,
          name: name,
          email_id: email_id ,
          phone_no : phone_no ,
          password: password,
          cpassword: cpassword
      }).then(() => {
          console.log('Successfully created client record.')
      }); 
  }

  return (
    <div>
        
    <div class="container-fluid login-wrapper">
      <div class="row">
        <div class="col-6">

        </div>
        <div class="col-6 pt-5 ">
          <div class="container bg-light py-3 rounded">
            <center>
              <h2>Sign Up</h2>
            </center>
            <form class="row g-3" >
              <div  class="col-md-6">
                <label for="inputName" class="form-label">Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <input placeholder='Name' className='input' type="text" onChange={(event)=> {setName(event.target.value)}}  name="Name" />
              </div>
              <div class="col-md-6">
                <label for="inputEmployeeId" class="form-label">Email ID:</label> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                <input placeholder='Email Id' className='input' type="email" onChange={(event)=> {setEmail_id(event.target.value)}}    name="Email" />
              </div>
              <div class="col-md-6">
                <label for="inputDepartment" class="form-label">Mobile No:</label>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              <input placeholder='Mobile number' className='input' type="number" onChange={(event)=> {setPhone_no(event.target.value)}}  name="Mobile" />
              </div>
              <div class="col-6">
                <label for="inputPassword" class="form-label">Enter Password:</label>
                &nbsp;&nbsp;  <input type="password" className='input' placeholder='Password' onChange={(event)=> {setPassword(event.target.value)}}  name="Pass1" />
              </div>
              <div class="col-6">
                <label for="inputRepassword" class="form-label">Confirm Password:</label>
                <input type="password" placeholder='Confirm Password' className='input'  onChange={(event)=> {setCpassword(event.target.value)}}  name="Pass2" />
              </div>
             
            
  						<p>Already have account ? <a href="login">Login Here</a></p>
              <div  class="col-12">
                <div className='sip1'>
                <button className='sip' onClick={addClientRecord}>Sign up</button></div>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Signup



