import React, {useState, useEffect} from 'react';
// import '../style/adminrecord.css'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Table,} from 'react-bootstrap';


 const Adminrecord = () => {

  const history = useNavigate();

  const [data, setData] = useState([]);

  const deleterecord = (e, id) =>{
    
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) =>{
        alert("deleted")    
    })     
  }

  useEffect(() => {
    Axios.get('http://localhost:3001/get').then((res) => {
        console.log(res);
        setData(res.data);
        console.log(data);
    });
}, [data]);

return(

    
  <div className="khem11">
    <Table border={3} striped bordered hover className='bb'>
                <thead className="abc122">
                    <tr className='head1'>
                        
                        <th> Id</th>
                        <th> Name</th>
                        <th>email_id</th>
                        <th >phone_no</th>
                        <th>Update</th>
                        <th>Deletion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    data.map(clientdata => {
                        return(
                            
                        <tr className="abcef">
                            <td>{clientdata.id}</td>
                            <td>{clientdata.name}</td>
                            <td>{clientdata.email_id}</td>
                            <td>{clientdata.phone_no}</td>

                            {/* <td>{clientdata.password}</td> */}
                            <td>
                                <button onClick={() => history(`/update/${clientdata.id}`)}>Edit</button>
                                </td>
                                <td>
                                <button onClick={(e) => deleterecord(e,clientdata.id)}>Delete</button>
                            </td>
                        </tr>
                        )
                    })
                    }
                </tbody>
            </Table>

            <div className="formgg22">
                <div className="formgg22">
                    <BsFillArrowLeftSquareFill color="aqua" fontSize={40} onClick={() => history('/adminhome')}></BsFillArrowLeftSquareFill>
                </div>
            </div>
  </div>
)

}


export default Adminrecord