import React, {useState} from 'react'
import Axios from 'axios';
import './style/side.css'
import { Link, useParams } from 'react-router-dom';

const Aprj = () => {

    const {id} = useParams()
       
  const [aprove, setAprove] = useState("");

  const addaprj = () => {
      Axios.put('http://localhost:3001/aprj', {
          id:id,
          aprove: aprove
      }).then(() => {
          console.log('Successfully sent.')
      }); 
  }




  return (
    <div>
        <h1 className='status1'>Status</h1>
        <label className='status'>status:</label>
        <select  onChange={(event)=>{setAprove(event.target.value)}} className='pranjal'>
            <option>--select--</option>
            <option>Aprove</option>
            <option className='reject'>Reject</option>
            </select><br></br><br></br>
<div className='aprj1'>
    <Link to="/adminhome">
            <button onClick={addaprj} className="aprj">submit</button></Link></div>
    </div>
  )
}

export default Aprj