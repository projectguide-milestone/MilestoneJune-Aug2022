import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../components/images/Audi.jpg'
import pic2 from '../components/images/BMW.jpg'
import pic3 from './images/Ferrari.jpg'
import pic4 from './images/Ford.jpg'
import pic5 from './images/Masaratti.jpg'
import pic6 from './images/Mercedes.jpg'

const Cardetails = () => {
  return (
    <div>
          <div class="container-fluid pt-2">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {/* <img src={pic1} className="pic1" class="d-block w-100" alt="..." /> */}
    </div>
    <div class="carousel-item">
      {/* <img src="imgs/Carousel2.png" class="d-block w-100" alt="..." /> */}
    </div>
    <div class="carousel-item">
      {/* <img src="imgs/Carousel3.png" class="d-block w-100" alt="..."> </img> */}
    </div>
  </div>
</div>
      </div>
      <hr/>
      {/* <!--Car Ads--> */}
      <div class="container-fluid px-3 pb-3 bg-light">
        <div class="row">
          <div class="col-4">
            <div class="card" >
  <img src={pic1} class="card-img-top card-image" alt="..." />
  <div class="card-body ms-1">
    <h3>AUDI</h3>
    <p class="card-text">Mileage 17.42 Kmpl view user reported mileage.</p>
<p>Transmission Automatic Only</p>
<p>Boot Space 460 Liters</p>
<p>Engine 1997 cc</p>
<p> Fuel Type Petrol Only</p>
<p>Top Speed 241 Km/h</p>
<p>Sunroof: Yes</p>
<Link to="/rentdetails">
    <button class="btn btn-outline-primary" type="button" name="button">Get</button>
    </Link>
  </div>
</div>
          </div>
          <div class="col-4">
            <div class="card" >
  <img src={pic2} class="card-img-top card-image" alt="..." />
  <div class="card-body ms-1">
    <h3>BMW X4</h3>
    <p class="card-text">Mileage 12.42 - 14.84 Kmpl view user reported mileage.</p>
<p>Transmission Automatic Only</p>
<p>Gear Box: 8 Speed</p>
<p>Engine 1998 cc</p>
<p> Fuel Type Petrol and Diesel</p>
<p>Top Speed 235 Km/h</p>
<p>Sunroof: NO</p>
<Link to="/rentdetails">
    <button class="btn btn-outline-primary" type="button" name="button">Get</button>
    </Link>  </div>
</div>
          </div>

          <div class="col-4">
            <div class="card" >
  <img src={pic4} class="card-img-top card-image" alt="..." />
  <div class="card-body ms-1">
    <h3>FORD MUSTANG</h3>
    <p class="card-text">ARAI Mileage13.0 kmpl  view user reported mileage.</p>
    <p>City Mileage4.6 kmpl</p>
<p>Transmission Automatic Only</p>
<p>Gear Box: 8 Speed</p>
{/* <p>Engine 1998 cc</p> */}
<p>Fuel Type: Petrol</p>
<p>Top Speed (Kmph)237.4</p>
<p>Sunroof: NO</p>
<Link to="/rentdetails">
    <button class="btn btn-outline-primary" type="button" name="button">Get</button>
    </Link>  </div>
</div>
          </div>

          <div class="col-4">
            <div class="card" >
  <img src={pic5} class="card-img-top card-image" alt="..." />
  <div class="card-body ms-1">
    <h3>MASERATI</h3>
    <p class="card-text">Mileage 16.00 Kmpl view user reported mileage.</p>
<p>Transmission Automatic Only</p>
<p>No. of cylinder :8</p>
{/* <p>Boot Space 460 Liters</p> */}
<p>Engine 2979 CC to 2987 CC</p>
<p> Fuel Type Petrol Only</p>
<p>Top Speed 241 Km/h</p>
<p>Sunroof: Yes</p>
<Link to="/rentdetails">
    <button class="btn btn-outline-primary" type="button" name="button">Get</button>
    </Link>
  </div>
</div>
          </div>

          <div class="col-4">
            <div class="card" >
  <img src={pic6} class="card-img-top card-image" alt="..." />
  <div class="card-body ms-1">
    <h3>MERCEDES BENZ AMG GT</h3>
    <p class="card-text">Mileage 12.46 Kmpl view user reported mileage.</p>
<p>Transmission Automatic Only</p>
<p>Boot Space  285 Liters</p>
<p>Engine  4.0-L V8 BITURBO engine</p>
<p> Fuel Type: Petrol Only</p>
<p>Top Speed 318 Km/h</p>
<p>Sunroof: No</p>
<Link to="/rentdetails">
    <button class="btn btn-outline-primary" type="button" name="button">Get</button>
    </Link>
  </div>
</div>
          </div>



          <div class="col-4">
            <div class="card" >
<img src={pic3} class="card-img-top card-image" alt="..." />
<div class="card-body me-1">
  <h3>Ferrari</h3>
  <p class="card-text">Mileage 12.46 Kmpl view user reported mileage.</p>
<p>Transmission Automatic Only</p>
<p>Boot Space  285 Liters</p>
<p>Engine  3990 cc</p>
<p> Fuel Type: Petrol Only</p>
<p>Top Speed 340 Km/h</p>
<p>Sunroof: No</p>
  <Link to="/rentdetails">
    <button class="btn btn-outline-primary" type="button" name="button">Get</button>
    </Link></div>
</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cardetails