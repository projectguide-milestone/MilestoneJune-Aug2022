import Axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const Update = () => {

    const {id } = useParams();

    const [category, setCategory] = useState("");

    const updateNewsCategory = () => {
        Axios.put('http://localhost:3001/update', {
            id: id,
            category : category
        }).then((response) => {
            alert("News updated")
        })
    }

    return(
        <div>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>News Category:
                            <input type="text" name="NewsId" onChange={(event)=> {setCategory(event.target.value)}}></input>
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <Button onClick={updateNewsCategory} className='primary-btn'>Edit</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}