import React, { useState } from 'react'
import axios from 'axios' 

const Createrecord = () => {

    const [name, setName] = useState("")

    const [email_id, setEmail_id] = useState("")

    const [password, setPassword] = useState("")

    const insert =() =>{
        axios.post('http://localhost:3001/post',{
            name:name,
            email_id:email_id,
            password:password
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
                        <label>email_id:
                            <input type="text" name="ClientId" onChange={(event)=>{setEmail_id(event.target.value)}}></input>
                        </label>
                    </div>
                    
                    <div className="form-group col-md-6">
                        <label>password:
                            <input type="text" name="ClientId" onChange={(event)=>{setPassword(event.target.value)}}></input>
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