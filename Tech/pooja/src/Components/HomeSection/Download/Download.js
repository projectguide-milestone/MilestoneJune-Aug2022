import React from "react"
import "./download.css"

const Download = () => {
  return (
    <>
      <section className='download top'>
        <div className='container flex_space'>
          <div className='row'>
            <h2>Download our app</h2>
            <h4>Stay informed with latest world and local news personalized for your interest</h4>
            <ul>
              <li>&#10003; Open the Google play store app or App store available </li>
              <li>&#10003; Search for Google News</li>
              <li>&#10003; Locate and tap the entry by Google</li>
              <li>&#10003; 24/7 customer service in more than 40 languages</li>
              <li>&#10003; Tap install, Allow installation to complete</li>
              <li>&#10003; Add your own reviews </li>
            </ul>
            <div className='img flex'>
              <img src='/images/appstore-button.png' alt='' />
              <img src='/images/google-play-button.png' alt='' />
            </div>
          </div>
          <div className='row row2'>
            <img src='/images/app-image-1.png' alt='' className='image' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Download
