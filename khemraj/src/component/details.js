import React from 'react'
// import khemraj from "../component/facebook.png";
import '../component/style/details.css'

 
export const Details = () => {
  return (
    <>
    <div className='profil1'>
      <form method="">
        <div className="row">
          {/* <div className="image5">
            <img src={khemraj} alt="image" />
          </div> */}

          <div>
           <div>
            <h5 className="hed">Facebook</h5>
            <h6 className="hid">-------------Mobile application---------------</h6>
            <p className='pk'> Ranking : 9/10 😃</p>

            <div>
              <h1 className="out">About <b>:</b></h1>
              <p className='p'><li>Facebook is an online social media and social networking service owned by American company Meta Platforms.</li><li>
              its name comes from the face book directories often given to American university </li><li>Facebook can be accessed from devices with Internet connectivity, such as personal computers, tablets and smartphones. After registering, users can create a profile revealing information about themselves.</li></p>
            </div>

            <div>
            <h1 className="out">Timeline <b>:</b></h1>
            <p className='p'><li>Facebook Timeline is a social media feature introduced by Facebook in September 2011 and rolled out to all users in February 2012.</li> <li>Timeline combines a user's Facebook Wall and Profile into one page, creating a more visually holistic profile. It includes reverse-chronological details, by year, of a user's Facebook history with key life points, including birthdays, weddings and other major events.</li> <li>

Timeline reorganizes all stored user information for display, rather than archival. In previous Facebook incarnations, it was more difficult or impossible to view outdated events, photos and comments.</li></p>
            </div>
           </div>
          </div> 
        </div>
      </form>

    </div>
    <form>
        <div className='aa'>
         <p className='ll'>Click here for <a className='uu' href='advert'>advertising :</a></p>
        </div>
      </form>
    </>
  )
}

export default Details