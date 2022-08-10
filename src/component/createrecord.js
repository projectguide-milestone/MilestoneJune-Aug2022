import React, { useState } from 'react'
import axios from 'axios' 

const Createrecord = () => {

    const [name, setName] = useState("")

    const [company, setCompany] = useState("")

    const [wage, setWage] = useState(0)

    const insert =() =>{
        axios.post('http://localhost:3001/post',{
            name:name,
            company:company,
            wage:wage
        }).then((response) => {
            alert("inserted")
        })

    }

  return (
    <div>
        
        <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Client Name:
                            <input type="text" name="ClientId" onChange={(event)=>{setName(event.target.value)}}></input>
                        </label>
                    </div>
                    <div className="form-group col-md-6">
                        <label>company:
                            <input type="text" name="ClientId" onChange={(event)=>{setCompany(event.target.value)}}></input>
                        </label>
                    </div>
                    
                    <div className="form-group col-md-6">
                        <label>wage:
                            <input type="text" name="ClientId" onChange={(event)=>{setWage(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <button onClick={insert} >Edit</button>
                    </div>
                </div>
            </form>

    </div>
  )
}

export default Createrecord