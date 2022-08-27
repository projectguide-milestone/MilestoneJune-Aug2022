import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios' 


const Addagent = () => {

  const {id } = useParams();

  const [name, setName] = useState("")

  const [agent_id, setAgent_id] = useState("")


  const addagent =() =>{
      axios.post('http://localhost:3001/createagent',{
          id:id,
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
                      <label>Agent Name:
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
                      <button onClick={addagent} >ADD</button></Link>
                  </div>
              </div>
          </form>

  </div>
)
}

export default Addagent