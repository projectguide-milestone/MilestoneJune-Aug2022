import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const Update = () => {

    const {id } = useParams();

    const [name, setName] = useState("")

    const [email_id, setEmail_id] = useState("");

    const [phone_no, setPhone_no] = useState(0)

    const updatename = () => {
        Axios.put('http://localhost:3001/update', {
            id: id,
            name: name,
            email_id:email_id,
            phone_no:phone_no
        }).then((response) => {
            alert("updated")
        })
    }

    return(
        <div>
            <form>
                <div className="form-row">
                    <div className="form-group">
                        <label>Name:
                            <input type="text" name="ClientId" onChange={(event)=> {setName(event.target.value)}}></input>
                        </label>
                    </div>
                
                <div className="form-group">
                        <label>Email_id:
                            <input type="text" name="ClientId" onChange={(event)=> {setEmail_id(event.target.value)}}></input>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Phone Number:
                            <input type="text" name="ClientId" onChange={(event)=> {setPhone_no(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group3">
                        <Button onClick={updatename}>Edit</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Update;