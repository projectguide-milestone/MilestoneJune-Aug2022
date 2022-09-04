import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import './style/advert.css'
import { useNavigate } from 'react-router-dom';


export const Advert = () => {

  const [data, setData] = useState([]);


  useEffect(() => {
    Axios.get('http://localhost:3001/getadagent').then((res) => {
      console.log(res);
      setData(res.data);
      console.log(data);
    });
  }, [data]);



  const [setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }



  const [product_name, setProduct_name] = useState("");
  const [product_dec, setProduct_dec] = useState("");
  const [agent, setAgent] = useState("");

  const [pic, setPic] = useState("");

  const history = useNavigate();

  const addproduct = () => {
    if (product_name !== '' && product_dec !== '') {
      if (agent !== '') {
        Axios.post('http://localhost:3001/product', {
          product_name: product_name,
          product_dec: product_dec,
          agent: agent,
          pic: pic
        }).then(() => {
          console.log('Successfully created client record.')
          history.push('/payment')
        });
      }else { alert (" select the agent")}
    }else { alert ("Every Field is requeried")}
    alert("Your Product have sent successfully: " +product_name)
  }






  return (
    <div className='advtmain'>
      <div className='profil11'>
        <form className="formtt" action='/payment'>
          <div className="out">
            <p className='type'>Product Name: <input onChange={(event) => { setProduct_name(event.target.value) }} className='inp' type="text" required></input></p>
          </div>

          <div className='out'>
            <p className='about'>Product declaration:<textarea onChange={(event) => { setProduct_dec(event.target.value) }} className='inp' type="text" required></textarea></p>
          </div>
          <div className='select'>
            <p className='out'>select:
              <select onChange={(event) => { setAgent(event.target.value) }} required>
                {
                  data.map(clientdata => {
                    return (
                      <option className='inp'>{clientdata.name}</option>
                    )
                  })
                }
              </select></p>
          </div>




          <div>

            <label className='lkk' for="image2">Product Picture</label>
          </div>
          <input type="file" onClick={handleChange} onChange={(event) => { setPic(event.target.value) }} required/>
          <div className='hbg'>
              <button type="submit" className='but' onClick={addproduct} >Upload</button>
          </div>

        </form>
      </div>
    </div>
  )
}


export default Advert 