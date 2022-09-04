import React from 'react';
import './style/home.css';
import pic1 from '../component/download.jpg'
import pic2 from '../component/images.jpg'
import pic3 from '../component/images1.jpg'


export const Home = () => {

 var key= localStorage.getItem('key')
 console.log(key)

  return(
    
    <div className="khem">
      <div>
        <form>
        {/* <marquee> */}
          <h1>Advertising Source Service</h1> 
          {/* </marquee> */}

          <h2>
            <a href="Record" className="as"><p><li>Agent</li></p></a>
          </h2>
          <h2>
            <a href="reply" className="as"><p><li>Your product Details</li></p></a>
          </h2>
          <h2>
            <a href="paydetails" className="as"><p><li>Payment Details</li></p></a>
          </h2>
        </form>

        <br/><br/>
       
        <div class="container-fluid px-3 pb-3 ">
        <div class="row">
          <div class="col-4">
            <div class="card" >
  <img src={pic1} class="card-img-top card-image" alt="..." />
  <div class="card-body ms-1">
    <h3>Major Advertised</h3>
    <h4 class="card-text">Facebook co.</h4>
<p>Your Facebook business Page is a free way for businesses, brands, celebrities, 
  causes and organisations to reach their audience. While Facebook profiles can be private, Pages are public.
   Google may index your Page, making it easier for people to find you.</p>
   <p>You can manage your Page on Facebook and platforms such as Meta Business Suite and Creator Studio on your desktop and mobile device.</p>

  </div>
</div>
          </div>
          <div class="col-4">
            <div class="card" >
  <img src={pic2} class="card-img-top card-image" alt="..." />
  <div class="card-body ms-1">
  <h3>Most Advertised</h3>
    <h4 class="card-text">ebay co.</h4>
<p> eBay is a multibillion-dollar business with operations in about 32 countries, as of 2019.
   The company manages the eBay website, an online auction and shopping website in which people and businesses buy and sell a wide variety of goods and services worldwide. </p>
<p> The website is free to use for buyers, but sellers are charged fees for listing items after a limited number of free listings, and an additional or separate fee when those items are sold</p>
<p>In addition to eBay's original auction-style sales, the website has evolved and expanded to include: instant "Buy It Now" shopping</p>
     </div>
</div>
          </div>

          <div class="col-4">
            <div class="card" >
  <img src={pic3} class="card-img-top card-image" alt="..." />
  <div class="card-body ms-1">
  <h3>Up coming Advertising Agent</h3>
    <h2 class="card-text">🥳</h2>
<h4>coming soon....</h4>

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

