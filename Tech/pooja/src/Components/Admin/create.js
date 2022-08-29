import { useState } from "react";
import { button } from "react-bootstrap";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';
import HeadTitle from "../../Common/HeadTitle/HeadTitle"

export const Create = () => {

    const history = useNavigate();

    const [id, setId] = useState(0);
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addNewsRecord = () => {
        Axios.post('http://localhost:3001/create', {
            id: id,
            category: category,
            title: title,
           description: description
        }).then(() => {
            console.log('Successfully created news record.')
        });
    }

    const display = () => {
        console.log(id);
        console.log(category);
        console.log(title);
    }
    
    return (
       
        <div className="container">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <HeadTitle />
                        <label>News Id:
                            <input type="text" name="NewsId" onChange={(event)=> {setId(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>News Category:
                            <input type="text" name="NewsCategory" onChange={(event)=> {setCategory(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Title:
                            <input type="text" name="title" onChange={(event)=> {setTitle(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Description:
                            <input type="text" name="description" onChange={(event)=> {setDescription(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <BsFillArrowLeftSquareFill color="#31b675" fontSize={40} onClick={() => history('/admin')}></BsFillArrowLeftSquareFill>
                    <div className="form-group col-md-6">
                        <button onClick={addNewsRecord} className='primary'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}