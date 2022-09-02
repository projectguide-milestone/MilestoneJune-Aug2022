import React, { useState } from 'react'
import Axios from 'axios' 
import { useNavigate, useParams } from 'react-router-dom'

const Updateagent = () => {

    const history = useNavigate();

    const {id} = useParams()

    const [name, setName] = useState("")

    const [agent_id, setAgent_id] = useState("")


    const updateagent1 =() =>{
        if(name !== '' && agent_id !== ''){
            Axios.put('http://localhost:3001/updateagent',{
                id: id,
                name:name,
                agent_id:agent_id
            }).then((response) => {
                alert ("updated")
                history.push('/adminagent')
            })
        }else { alert("Every Filed is required")}

    }



  return (
    <div>
        
    <form>
            <div className="form-row">
                <div className="out">
                    <label> Name:
                        <input type="text" classname="out" onChange={(event)=>{setName(event.target.value)}}></input>
                    </label>
                </div>
                <div className="out">
                    <label>Agent id:
                        <input type="text" classname="out" onChange={(event)=>{setAgent_id(event.target.value)}}></input>
                    </label>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group3">
                    <button onClick={updateagent1} >Update</button>
                </div>
            </div>
        </form>

</div>
  )
}

export default Updateagent