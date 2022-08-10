import React, {useState, useEffect} from 'react';
import './style/Record.css'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

import {Table,} from 'react-bootstrap';


 const Adminrecord = () => {

  const history = useNavigate();

  const [data, setData] = useState([]);

  const deleterecord = (e, id) =>{
    
    Axios.delete('http://localhost:3001/delete',{
        id:id
    }).then((response) =>{
        alert("deleted")
    })     
  }

  useEffect(() => {
    Axios.get('http://localhost:3001/get').then((res) => {
        console.log(res);
        setData(res.data);
        console.log(data);
    });
}, );

return(
  <div className="khem1">
    <Table border={3} striped bordered hover className='bb'>
                <thead className="abc1">
                    <tr>
                        
                        <th> Id</th>
                        <th> Name</th>
                        <th> Company</th>
                        <th>wage</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{
                    data.map(clientdata => {
                        return(
                            
                        <tr className="abc">
                            <td>{clientdata.id}</td>
                            <td>{clientdata.name}</td>
                            <td>{clientdata.company}</td>
                            <td>{clientdata.wage}</td>
                            <td>
                                <button onClick={() => history(`/update/${clientdata.id}`)}>Edit</button>
                                <button onClick={(e) => deleterecord(e,clientdata.id)}>Delete</button>
                            </td>
                        </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
  </div>
)

}


export default Adminrecord