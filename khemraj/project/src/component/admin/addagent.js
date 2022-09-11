import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios' 
import '../style/details.css'


const Addagent = () => {

  const {id } = useParams();

  const [name, setName] = useState("")

  const [agent_id, setAgent_id] = useState("")

  const [about, setAbout] = useState("")

  const history = useNavigate();

  const addagent =() =>{
    if(name !== '' && agent_id !== ''){
        if(about !== ''){
        axios.post('http://localhost:3001/createagent',{
            id:id,
            name:name,
            agent_id:agent_id,
            about: about
        }).then(() => {
            alert ("updated")
            history.push('/adminagent')
        })
    }else {alert("About the agent is required")}
    }else { alert ("every field is required")}
    alert("agent created: " +name)
  }

return (
  <div>
      
      <form action='adminagent'>
              <div className="form-row">
                  <div className="out">
                      <label>Agent Name:
                          <input type="text" classname="out" onChange={(event)=>{setName(event.target.value)}} required></input>
                      </label>
                  </div>
                  <div className="out">
                      <label>Agent id:
                          <input type="text" classname="out" onChange={(event)=>{setAgent_id(event.target.value)}} required></input>
                      </label>
                  </div>
                  <div className="out">
                      <label>About agent:
                          <textarea type="text" classname="out" onChange={(event)=>{setAbout(event.target.value)}} required></textarea>
                      </label>
                  </div>
              </div>
              <div className="form-row">
                  <div className="form-group3">
                    <div className='add1'>
                      <button type='submit' onClick={addagent} className="but1">ADD</button>
                    </div>
                  </div>
              </div>
              
          </form>

  </div>
)
}

export default Addagent