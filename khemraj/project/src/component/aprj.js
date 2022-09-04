import React, {useState} from 'react'
import Axios from 'axios';
import './style/side.css'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Aprj = () => {

    const {id} = useParams()
    
    const history = useNavigate();
       
  const [aprove, setAprove] = useState("");

  const addaprj = () => {
    if(aprove!== ''){
        Axios.put('http://localhost:3001/aprj', {
            id:id,
            aprove: aprove
        }).then(() => {
            console.log('Successfully sent.')
            history.push('/adminhome')
        }); 
    }else { alert('Status should be selected')}
alert("Product Status : " +aprove)
  }




  return (
    <div>
      <form>
        <h1 className='status1'>Status</h1>
        <label className='status'>status:</label>
        <select  onChange={(event)=>{setAprove(event.target.value)}} className='pranjal' required>
            <option>--select--</option>
            <option>Aproved</option>
            <option className='reject'>Rejected</option>
            </select><br></br><br></br>
<div className='aprj1'>
    <Link to="/adminhome">
            <button onClick={addaprj} type="submit" className="aprj">submit</button></Link></div>
            </form>
    </div>
  )
}

export default Aprj