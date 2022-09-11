import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { BsFillArrowLeftSquareFill } from "react-icons/bs";


import {Table,} from 'react-bootstrap';



const Adminagent = () => {

  const history = useNavigate();

  const [data, setData] = useState([]);

  const deleterecord = (e, id) =>{
    
    Axios.delete(`http://localhost:3001/deleteagent/${id}`).then((response) =>{
        alert("deleted")    
    })     
  }

  useEffect(() => {
    Axios.get('http://localhost:3001/getadagent').then((res) => {
        console.log(res);
        setData(res.data);
        console.log(data);
    });
}, [data]);


  return (


     
    <div className="khem1">
           
            <div>
           
            <center><h2 className='yyy'>Agents Record</h2></center>
            </div>
            <Link to="/addagent">
              <div className='add'>
        <button >addagent</button></div></Link>
            <center>
              <div className='tbh'>
            <Table border={3} striped bordered hover className='bb'>
                <thead className="abc1">
                    <tr>
                        <th>Agent Name</th>
                        <th>Agent Id</th>
                        <th>About Agent</th>
                        <th>Update</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody className='abc'>
                {
                    data.map(clientdata => {
                        return(
                    <tr>
                        <td><p className='abc'>{clientdata.name}</p></td>
                        <td><p className='abc'>{clientdata.agent_id}</p></td>
                        <td><p className='abc'>{clientdata.about}</p></td>
                        <td><button onClick={() => history(`/updateagent/${clientdata.id}`)} >Edit</button></td>
                        <td><button onClick={(e) => deleterecord(e,clientdata.id)}>Delete</button></td>
                      </tr>
                        )
                    })
                    }
                 </tbody>


                 </Table>
                 </div>
                 <center>
                 <div className="form">
                <div className="formg2">
                    <BsFillArrowLeftSquareFill color="aqua" fontSize={40} onClick={() => history('/adminhome')}></BsFillArrowLeftSquareFill>
                </div>
            </div></center>


                 <div className="form-row">
                </div>

                 </center>
                 </div>

  )
}

export default Adminagent



