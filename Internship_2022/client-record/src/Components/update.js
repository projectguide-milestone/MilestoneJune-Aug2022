import Axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const Update = () => {

    const {id } = useParams();

    const [name, setName] = useState("");

    const updateClientName = () => {
        Axios.put('http://localhost:3001/update', {
            id: id,
            name: name
        }).then((response) => {
            alert("Client Name updated")
        })
    }

    return(
        <div>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Client Name:
                            <input type="text" name="ClientId" onChange={(event)=> {setName(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <Button onClick={updateClientName}>Edit</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}