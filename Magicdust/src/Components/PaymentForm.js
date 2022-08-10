import React, { useState } from 'react'
import './PaymentForm.css';

import Axios from 'axios'


function PaymentForm() {
  
const [id, setId] = useState(0)
const [accountname, setAccountName] = useState("")
const [accountnumber, setAccountNumber] = useState("")
const [accountdescription, setAccountDescription] = useState("")
const [accountstatus, setAccountStatus] = useState("")
const [paymentstatus, setPaymentStatus] = useState("")

const addRecord = () => {
  Axios.post('http://localhost:3001/create', {
      id: id,
      accountname: accountname,
      accountnumber: accountnumber,
      accountdescription: accountdescription,
      accountstatus: accountstatus,
      paymentstatus: paymentstatus,
  }).then(() => {
      console.log('Successfully created client record.')
  });
}


  return (
    <div className='payform'>
      <div className='payform-container'>
          <h1>Payment form</h1>
          <input type="text"  placeholder='ID'
            onChange={(event)=> {setId(event.target.value)}}></input> 
        
          <input type="text"  placeholder='Account Name'
            onChange={(event)=> {setAccountName(event.target.value)}}></input>

          <input type="number"  placeholder='Account Number'
            onChange={(event)=> {setAccountNumber(event.target.value)}}></input>
        
          <input type="text"  placeholder='Account Description'
            onChange={(event)=> {setAccountDescription(event.target.value)}}></input>

          <select className='payment-input-dropdown' placeholder='Payment Status' name="Accounnt Status"
              onChange={(event)=> {setAccountStatus(event.target.value)}}>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
          </select>

          <select className='payment-input-dropdown' placeholder='Account Status' name="Accounnt Status"
              onChange={(event)=> {setPaymentStatus(event.target.value)}}>
            <option value="Activated">Activated</option>
            <option value="Deactivated">Deactivated</option>
            <option value="Pending">Pending</option>
          </select>
          <button className='Payment-Button' onClick={addRecord}>Submit</button>
        </div>
    </div>
  )
}

export default PaymentForm