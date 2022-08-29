import React from "react"
import "../popular/MostPopular.css"
//import Dcards from "../../Recent-news/Dcards"
import AllItem from "../../Recent-news/AllItem"

const DestinationHome = () => {
  return (
    <>
      <section className='popular top'>
        <div className='full_container'>
          <div className='heading'>
            <h1>Recent News</h1>
            <div className='line'></div>
          </div>

          <div className='content'>
            <AllItem />
          </div>
        </div>
      </section>
    </>
  )
}

export default DestinationHome
