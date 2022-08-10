import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios' 
import './style/update.css'

const Update = () => {

    const {id } = useParams();

    const [name, setName] = useState("")

    const [company, setCompany] = useState("")

    const [wage, setWage] = useState(0)

    const updatename =() =>{
        axios.put('http://localhost:3001/update',{
            id:id,
            name:name,
            company:company,
            wage:wage
        }).then((response) => {
            alert ("updated")
        })

    }

  return (
    <div>
        
        <form>
                <div className="form-row">
                    <div className="form-group">
                        <label>Client Name:
                            <input type="text" classname="ClientId" onChange={(event)=>{setName(event.target.value)}}></input>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Company name:
                            <input type="text" classname="ClientId" onChange={(event)=>{setCompany(event.target.value)}}></input>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>wage:
                            <input type="text" classname="ClientId" onChange={(event)=>{setWage(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group3">
                        <button onClick={updatename} >Edit</button>
                    </div>
                </div>
            </form>

    </div>
  )
}

export default Update