import React from 'react' 
import {useState, useEffect} from 'react';
import Axios from 'axios';
import './style/advert.css'
import {Link} from 'react-router-dom';


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
  const [	product_dec, setProduct_dec] = useState("");
  const [agent, setAgent] = useState("");

  const [pic, setPic] = useState("");

  const addproduct = () => {
      Axios.post('http://localhost:3001/product', {
          product_name: product_name,
          product_dec: 	product_dec,
          agent: agent,
          pic: pic 
      }).then(() => {
          console.log('Successfully created client record.')
      }); 
  }





  return (
    <div className="App2">
    <form className="formtt">
    <div>
        <p className='type'>Product Name: <input onChange={(event)=> {setProduct_name(event.target.value)}} className='inp'></input></p>
      </div>

      <div className='text'>
        <p className='about'>Product declaration:<textarea onChange={(event)=> {setProduct_dec(event.target.value)}} className='area'></textarea></p>
      </div>
      <div>
      <p className='about'>select:
        <select onChange={(event)=> {setAgent(event.target.value)}}>
        {
                    data.map(clientdata => {
                        return(
          <option>{clientdata.name}</option>
          )
        })
        }
        </select></p>
      </div>




      <div>
        
      <label className='lkk' for="image2">Product Picture</label>
      </div>
      <input type="file" onClick={handleChange} onChange={(event)=> {setPic(event.target.value)}}  />
      <div className='hbg'>
        <Link to="/payment">
      <button type="submit" className='bgg' onClick={addproduct} >Upload</button></Link>  
      </div>
      
    </form>
</div>
  )
}


export default Advert 