import React from 'react'
import '../components/style/home.css'; 
import pic from '../components/pic1.jpg'
import { Link } from 'react-router-dom'
import pic10 from './images/Tata Nexon.jpg'
import pic11 from './images/Hyundai.jpg'
import pic12 from './images/Skoda.jpg'
import pic13 from './images/Alto.jpg'
import pic14 from './images/Baleno.jpg'
import pic15 from './images/mahindra.jpg'


const Home = () => {
  return (
    <div>
<div className='log'>
        <Link to="/login">
      <button className='log1'>Logout</button></Link></div>

    <div className='profile'>
      <center>
      <div className="box">
        <img className='iimg' src={pic} alt="" />
        <div className='imp'>
        <input type="file" name="" id="file" accept="image/*"></input>
        <label className='lbb' for="file">EDIT PIC</label>
        <input type="text" name="" placeholder='User Name'></input>
        <input type="email" name="" placeholder='Email Id'></input>
        <input type="text" name="" placeholder='Phone Number'></input>
        <input type="text" name="" placeholder='Change Password'></input>
        <input type="text" name="" placeholder='Confirm Password'></input>
        </div>
       <div className='har'><button id='homebt' className='bthome'>CANCEL</button></div> 
      <div className='har1'> <button id='homebt' className='btdone'>DONE</button></div> 
      </div>
      </center>
    </div>
    <div>
      <h2>What's New</h2>
      <form>
        <div>
        <div>
        
      <hr/>
      {/* <!--Car Ads--> */}
      <div class="container-fluid px-3 pb-3 bg-light">
        <div class="row">
          <div class="col-4">
            <div class="card" >
                <div class="card-body ms-1">
                <img class="card-img-top card-image"  src={pic10} alt=''/>
    <h3>Tata Nexon</h3>

  </div>
</div>
          </div>
          <div class="col-4">
            <div class="card" >
  <div class="card-body ms-1">
  <img class="card-img-top card-image"  src={pic11} alt=''/>
    <h3>Hyundai</h3>

      </div>
</div>
          </div>



          <div class="col-4">
            <div class="card" >
<div class="card-body me-1">
<img class="card-img-top card-image"  src={pic12} alt=''/>
  <h3>Skoda</h3>
    </div>
</div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </form>
    </div>




<div className='abc'>
<div className='khem1' >
  <Link to="/rentdetails">
  <button className='khem'>Book Your car for Rent</button></Link>
</div>
<div className='khem1'>
  <Link to="/cardetails">
  <button className='khem'>More cars</button></Link>
</div>
</div>





    <div>
      <form>
        <div>
        <div>
        
      <hr/>
      <div class="container-fluid px-3 pb-3 bg-light">
        <div class="row">
          <div class="col-4">
            <div class="card" >
                <div class="card-body ms-1">
                <img class="card-img-top card-image"  src={pic13} alt=''/>
    <h3>Alto</h3>

  </div>
</div>
          </div>
          <div class="col-4">
            <div class="card" >
  <div class="card-body ms-1">
  <img class="card-img-top card-image"  src={pic14} alt=''/>
    <h3>Baleno</h3>

      </div>
</div>
          </div>



          <div class="col-4">
            <div class="card" >
<div class="card-body me-1">
<img class="card-img-top card-image"  src={pic15} alt=''/>
  <h3>Mahindra E-V</h3>
  <p class="card-text">Tomorow's Generation.</p>
  <p><b>Today</b></p>
    </div>
</div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </form>
    </div>



    </div>





  )
}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>


export default Home