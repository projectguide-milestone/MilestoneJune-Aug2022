import React, { useState } from 'react'
import Axios from 'axios' 
import { useNavigate, useParams } from 'react-router-dom'

const Updateagent = () => {

    const history = useNavigate();

    const {id} = useParams()

    const [name, setName] = useState("")

    const [agent_id, setAgent_id] = useState("")

    const [about, setAbout] = useState("")



    const updateagent1 =() =>{
        if(name !== '' && agent_id !== ''){
            if (about !== ''){
            Axios.put('http://localhost:3001/updateagent',{
                id: id,
                name:name,
                agent_id:agent_id,
                about:about
            }).then((response) => {
                alert ("updated")
                history.push('/adminagent')
            })
        }else { alert("about agent is required")}
        }else { alert("Every Filed is required")}
alert("Agent Updated : "+name)
    }



  return (
    <div>
        
    <form action='/adminagent'>
            <div className="form-row">
                <div className="out">
                    <label> Name:
                        <input type="text" classname="out" onChange={(event)=>{setName(event.target.value)}} required></input>
                    </label>
                </div>
                <div className="out">
                    <label>Agent id:
                        <input type="text" classname="out" onChange={(event)=>{setAgent_id(event.target.value)}} required></input>
                    </label>
                </div>
                <div className="out">
                    <label>About Agent:
                        <textarea type="text" classname="out" onChange={(event)=>{setAbout(event.target.value)}} required></textarea>
                    </label>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group3">
                    <div className='add1'>
                    <button type='submit' onClick={updateagent1} >Update</button>
                    </div>
                </div>
            </div>
        </form>

</div>
  )
}

export default Updateagent