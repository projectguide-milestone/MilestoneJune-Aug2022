import React from 'react' 
import {useState} from 'react';
import axios from 'axios';
import './style/advert.css'
import {Link} from 'react-router-dom';


export const Advert = () => {
  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:3000/payment';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

  }

  return (
    <div className="App2">
    <form onSubmit={handleSubmit} className="formtt">
    <div>
        <p className='type'>Product Name: <input className='inp'></input></p>
      </div>

      <div className='text'>
        <p className='about'>Product declaration:<textarea className='area'></textarea></p>
      </div>
      {/* <div className='ppkk'>
      <h1 className='ph1'>Product File Upload</h1>
      </div> */}
      <div>
        <p className='pppp'>Product pictures:
        
      <label className='lkk' for="image2">Choose file to upload</label></p>
      </div>
      <input type="file" onChange={handleChange}/>
      <div className='hbg'>
        <Link to="payment">
      <button type="submit" className='bgg' >Upload</button></Link>  
      </div>
      
    </form>
</div>
  )
}


export default Advert 