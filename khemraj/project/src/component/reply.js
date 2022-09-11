import React from 'react'
import Axios from 'axios'
import {useState, useEffect} from 'react';
import '../component/style/Record.css'
import pic from '../component/img1.jpg'

const Reply = () => {


    const [data, setData] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:3001/getproduct').then((res) => {
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
                    <img className="iiii" src={pic} alt=''></img>
                    {/* <img src={clientdata.pic} className="iiii" class="card-img-top card-image" alt="..." /> */}
                     <div class="card-body ms-1">
                         <h3>{clientdata.product_name}</h3>
                              <p class="card-text">{clientdata.product_dec}</p>
                              <p class="card-text">agent:  {clientdata.agent}</p>
                              <label><span className='span'><b>Status: </b></span><span className='span1'>{clientdata.aprove}</span></label>
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

export default Reply