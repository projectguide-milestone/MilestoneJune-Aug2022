import { useState } from "react";
import { Button } from "react-bootstrap";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';

export const Footer = () => {

    const history = useNavigate();

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [comp, setComp] = useState("");
    const [state, setState] = useState("");
    const [tid, setTid] = useState(0);
    const [tstate, setTstate] = useState("");

    const addClientRecord = () => {
        Axios.post('http://localhost:3001/create', {
            id: id,
            name: name,
            comp: comp,
            state: state,
            tid: tid,
            tstate: tstate
        }).then(() => {
            console.log('Successfully created client record.')
        });
    }

    const display = () => {
        console.log(id);
        console.log(name);
        console.log(comp);
    }
    
    return (
        <div className="container">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Client Id:
                            <input type="text" name="ClientId" onChange={(event)=> {setId(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Client Name:
                            <input type="text" name="ClientName" onChange={(event)=> {setName(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Client Company:
                            <input type="text" name="ClientCompany" onChange={(event)=> {setComp(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>State:
                            <input type="text" name="State" onChange={(event)=> {setState(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Transaction Id:
                            <input type="text" name="TransactionId" onChange={(event)=> {setTid(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Transaction Status:
                            <input type="text" name="TransactionState" onChange={(event)=> {setTstate(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <BsFillArrowLeftSquareFill color="#000000" fontSize={40} onClick={() => history('/home')}></BsFillArrowLeftSquareFill>
                    <div className="form-group col-md-6">
                        <Button onClick={addClientRecord}>Submit</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}