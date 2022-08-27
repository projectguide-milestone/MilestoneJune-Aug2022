import React from 'react'
import Axios from 'axios';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import '../component/style/payment.css'

const Payment = () => {

  // const [show, setShow] = useState(false)

  const [show, setShow] = useState('');

  const handleshow= (event) =>{
   const getuser = event.target.value;
   setShow(getuser);
  }

  const [name, setName] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [	email, setEmail] = useState("");
  const [pmode, setPmode] = useState("");
  const [uname, setUname] = useState("");
  const [upi, setUpi] = useState("");

  const [usname, setUsname] = useState("");
  const [accno, setAccno] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [bname, setBname] = useState("");


  const addnet = () => {
    Axios.post('http://localhost:3001/netpayment', {
        usname: usname,
        accno: accno,
        ifsc: ifsc,
        bname: bname

    }).then(() => {
        console.log('Successfully created client record.')
    }); 
}

  const addpay = () => {
      Axios.post('http://localhost:3001/payment', {
          name: name,
          phone_no: phone_no,
          email: email,
          pmode: pmode,
          uname: uname,
          upi: upi
      }).then(() => {
          console.log('Successfully created client record.')
      }); 
  }



  return (
    <div>
      <div className='ppq1'>
        <div className='ppq'>
          <form border={2} solid striped bordered hover >
            <div>
              <h2>Payment Gateway</h2>
            </div>
            <div>
              <lable>Name:</lable>
              <div>
              <input className='qwe' type="text" onChange={(event)=> {setName(event.target.value)}} required></input></div>
            </div>
            <div>
              <lable>Phone Number:</lable>
              <div>
              <input className='qwe'   onChange={(event)=> {setPhone_no(event.target.value)}} required></input></div>
            </div>
            <div>
              <lable>Email ID:</lable>
              <div>
              <input className='qwe' type="email" onChange={(event)=> {setEmail(event.target.value)}} required></input></div>
            </div>
            <div>

            {/* <button onClick={()=>setShow(!false)}>toggle</button>
             {
               show?<h3>hello</h3>:null
             } */}




            <label>Payment Mode:</label>
              <select onClick={(e)=>(handleshow(e))} className='qwe' onChange={(event)=> {setPmode(event.target.value)}} required>
                <option value="">--select payment mode--</option>
                <option value="1">Google pay</option>
                <option value="2">Phone pay</option>
                <option value="3">Net Banking</option>
                <option value="4">Tez</option>
              </select>
            </div>


{
              show==='1' && (
                <div>
                  <label>user name:</label>
                  <input className='qwe'onChange={(event)=> {setUname(event.target.value)}} placeholder='name'required></input><br/>
                  <label>UPI ID:</label>
                  <input className='qwe' onChange={(event)=> {setUpi(event.target.value)}} placeholder='UPI ID'required></input>
                  <label>Amount to be paid :</label>
                  <label className='qwe11' placeholder='5000'>Rs.5000/-</label>
                </div>
              )
            }

{
              show==='2' && (
                <div>
                  <label>user name:</label>
                  <input className='qwe'onChange={(event)=> {setUname(event.target.value)}}  placeholder='name'required></input><br/>
                  <label>Phone Pay UPI ID:</label>
                  <input className='qwe' onChange={(event)=> {setUpi(event.target.value)}} placeholder='Phone Pay UPI ID'required></input>
                  <br/>
                  <label>Amount to be paid :</label>
                  <label className='qwe11' placeholder='5000'>Rs.5000/-</label>
                </div>
              )
            }

            
{
              show==='3' && (
                <div>
                  <label> user name:</label>
                  <input className='qwe' placeholder='name' onChange={(event)=> {setUsname(event.target.value)}} required></input><br/>
                  <label>Account Number:</label>
                  <input className='qwe' placeholder='Account Number' onChange={(event)=> {setAccno(event.target.value)}} required></input>
                  <label>IFSC code:</label>
                  <input className='qwe' placeholder='IFSC code' onChange={(event)=> {setIfsc(event.target.value)}} required></input>
                  <label>Branch Name:</label>
                  <select className='qwe' onChange={(event)=> {setBname(event.target.value)}} required>
                    <option value="">--select Bank--</option>
                    <option>SBI</option>
                    <option>Axis</option>
                    <option>HDFC</option>
                    <option>Canara</option>
                    <option>Indian bank</option>
                    <option>Corparation</option>
                  </select>
                  <label>Amount to be paid :</label>
                  <label className='qwe11' placeholder='5000'>Rs.5000/-</label>
                </div>
              )
            }


{
              show==='4' && (
                <div>
                  <label>user name:</label>
                  <input className='qwe'onChange={(event)=> {setUname(event.target.value)}}  placeholder='name'required></input><br/>
                  <label>Tez ID:</label>
                  <input className='qwe' onChange={(event)=> {setUpi(event.target.value)}}  placeholder='UPI ID'required></input>
                  <label>Amount to be paid :</label>
                  <label className='qwe11' placeholder='5000'>Rs.5000/-</label>
                </div>
              )
            }




            <div></div>

            <div className='tyu'>
              <Link to="/success">
              <button onChange={addnet} onClick={addpay}>submit</button></Link>

              <button onClick={addnet}>ok</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Payment