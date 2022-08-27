import React from 'react';
import './style/home.css';
import {Link} from 'react-router-dom'
// import pic from '../component/pizzaparty1.png'
import pic1 from '../component/download.jpg'
import pic2 from '../component/images.jpg'
import pic3 from '../component/images1.jpg'


export const Home = () => {
  return(
    
    <div className="khem">
      <div>
        <form>
        {/* <marquee> */}
          <h1>Advertising Source Service</h1> 
          {/* </marquee> */}
          <div className='log'>
         <Link to="/login">
          <button className='logout'>Logout</button></Link></div>

        <div className='pro1'>
          <a href="profile" className="pro"><p><li>Profile</li></p></a>
          </div>
          <h2>
            <a href="Record" className="as"><p><li>Agent</li></p></a>
          </h2>
          <h2>
            <a href="reply" className="as"><p><li>Your product reply's</li></p></a>
          </h2>
          {/* <img className='hopi' src={pic} alt=""></img> */}
        </form>

        <br/><br/>
       
        <div class="container-fluid px-3 pb-3 ">
        <div class="row">
          <div class="col-4">
            <div class="card" >
  <img src={pic1} class="card-img-top card-image" alt="..." />
  <div class="card-body ms-1">
    <h3>Major Advertised</h3>
    <p class="card-text">Facebook co.</p>
<p>about co....</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
  </div>
</div>
          </div>
          <div class="col-4">
            <div class="card" >
  <img src={pic2} class="card-img-top card-image" alt="..." />
  <div class="card-body ms-1">
  <h3>Most Advertised</h3>
    <p class="card-text">ebay co.</p>
<p>about co....</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
     </div>
</div>
          </div>

          <div class="col-4">
            <div class="card" >
  <img src={pic3} class="card-img-top card-image" alt="..." />
  <div class="card-body ms-1">
  <h3>Up coming Advertising Agent</h3>
    <p class="card-text">🥳</p>
<p>coming soon....</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
     </div>
</div>
          </div>

</div>
          </div>
        </div>
      </div>
  )
}
export default Home

