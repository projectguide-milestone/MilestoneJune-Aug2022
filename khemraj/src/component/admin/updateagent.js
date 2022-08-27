import React, { useState } from 'react'
import Axios from 'axios' 
import { Link, useParams } from 'react-router-dom'

const Updateagent = () => {


    const {id} = useParams()

    const [name, setName] = useState("")

    const [agent_id, setAgent_id] = useState("")


    const updateagent1 =() =>{
        Axios.put('http://localhost:3001/updateagent',{
            id: id,
            name:name,
            agent_id:agent_id
        }).then((response) => {
            alert ("updated")
        })

    }



  return (
    <div>
        
    <form>
            <div className="form-row">
                <div className="form-group">
                    <label> Name:
                        <input type="text" classname="ClientId" onChange={(event)=>{setName(event.target.value)}}></input>
                    </label>
                </div>
                <div className="form-group">
                    <label>Agent id:
                        <input type="text" classname="ClientId" onChange={(event)=>{setAgent_id(event.target.value)}}></input>
                    </label>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group3">
                    <Link to="/adminagent">
                    <button onClick={updateagent1} >Update</button></Link>
                </div>
            </div>
        </form>

</div>
  )
}

export default Updateagent