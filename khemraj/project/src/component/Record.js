import React, {useState, useEffect} from 'react';
import './style/Record.css'
import {Table,} from 'react-bootstrap';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { BsFillArrowLeftSquareFill } from "react-icons/bs";


export const Record = () => {

    const history = useNavigate();

    
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/getagent').then((res) => {
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
            <center>
              <div className='tbh'>
            <Table border={3} striped bordered hover className='bb'>
                <thead className="abc1">
                    <tr>
                        <th>Agent Name</th>
                        <th>About</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='abc'>
                {
                    data.map(clientdata => {
                        return(
                    <tr>
                        <td><p className='abc'>{clientdata.name}</p></td>
                        <td><p className='abc'>{clientdata.about}</p></td>
                        <td><a href='advert'><button>advertise Here</button></a></td>
                      </tr>
                        )
                    })
                    }
                 </tbody>


                 </Table>
                 </div>
                 <br/><br/>
                 <div className="form-row">
                    <BsFillArrowLeftSquareFill color="green" fontSize={50} onClick={() => history('/home')}></BsFillArrowLeftSquareFill>
                </div>
                 {/* <button>ok 😃</button> */}
                 </center>
                 </div>
    )
                }

export default Record





        //    {/* 
                 
        //          agent details Link
                 
        //          https://mobilemonkey.com/blog/free-advertising-sites */}