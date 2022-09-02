
import React from 'react'
import Axios from 'axios'
import {useState, useEffect} from 'react';
import '../component/style/Record.css'


const Paydetails = () => {


    const [data, setData] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:3001/getcupay').then((res) => {
            console.log(res);
            setData(res.data);
            console.log(data);
        });
    }, [data]);
  return (
    <div>
          <h1>Product Details :</h1>
           <div>
    {
             data.map(clientdata => {
                 return(

 <div>
     <div class="container-fluid px-3 pb-3 ">
         <div class="row">
             <div class="col-4">
                <div class="card" >
                     <div class="card-body ms-1">
                         <h3><span>payment id : </span> {clientdata.id}</h3>
                              <p class="card-text"><span><b> user name :</b></span>{clientdata.name}</p>
                              <p class="card-text"><b>Phone number:</b>  {clientdata.phone_no}</p>
                              <p class="card-text"><b>Email id: </b> {clientdata.email}</p>
                              <p class="card-text"><b>Payed by:</b>  {clientdata.pmode}</p>

                              {/* <label><span className='span'><b>Status: </b></span><span className='span1'>{clientdata.aprove}</span></label> */}
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
                 )
})
}


</div></div>
  )
}

export default Paydetails