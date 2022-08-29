import { useState } from "react";
import { Button } from "react-bootstrap";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';

const Create = () => {

    const history = useNavigate();
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [house_type, setHouse_Type] = useState("");
    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState("");

    const addHouse = () => {
        Axios.post('http://localhost:3001/create', {
            id: id,
            name: name,
            house_type: house_type,
            address: address,

            amount: amount
        }).then(() => {
            console.log('Successfully created .')
        });
    }

    const display = () => {
        console.log(id);
        console.log(name);
        console.log(house_type);
    }
    
    return (
        <div className="container">
            <form ><center>
                <div className="form-row" >
                    <div className="form-group col-md-6">
                        <label>Id:<br/>
                            <input type="text" name="Id" onChange={(event)=> {setId(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Name:<br/>
                            <input type="text" name="Name" onChange={(event)=> {setName(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>House_Type:<br/>
                            <input type="text" name="house_type" onChange={(event)=> {setHouse_Type(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Address:<br/>
                            <input type="text" name="Address" onChange={(event)=> {setAddress(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Amount:<br/>
                            <input type="text" name="Amount" onChange={(event)=> {setAmount(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <BsFillArrowLeftSquareFill color="#000000" fontSize={40} onClick={() => history('/admin')}></BsFillArrowLeftSquareFill>
                    <div className="form-group col-md-6">
                        <Button onClick={addHouse}>Submit</Button>
                    </div>
                </div>
                </center>
            </form>
        </div>
    )
}
export default Create;