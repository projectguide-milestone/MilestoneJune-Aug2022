import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Table,} from 'react-bootstrap';
import '../style/adminpay.css'
import { useNavigate } from 'react-router-dom';
import { BsFillArrowLeftSquareFill } from "react-icons/bs";



const Adminpayment = () => {

    const [data, setData] = useState([]);

    const history = useNavigate();



    useEffect(() => {
        Axios.get('http://localhost:3001/getpayment').then((res) => {
            console.log(res);
            setData(res.data);
            console.log(data);
        });
    }, [data]);

  return (
    <div className='pra'>
        <h3>UPI Payment's Details:</h3>
        <Table border={3} striped bordered hover className='bb'>
                <thead className="abc122"> 
                    <tr className='head1'>
                        
                        <th> Id</th>
                        <th> Name</th>
                        <th >phone_no</th>
                        <th>email</th>
                        <th>Payment mode</th>
                        <th>User UPI Id</th>

                    </tr>
                </thead>
                <tbody>
                    {
                    data.map(clientdata => {
                        return(
                            
                        <tr className="abcef">
                            <td>{clientdata.id}</td>
                            <td>{clientdata.name}</td>
                            <td>{clientdata.phone_no}</td>
                            <td>{clientdata.email}</td>
                            <td>{clientdata.pmode}</td>
                            <td>{clientdata.upi}</td>

                        </tr>
                        )
                    })
                    }
                </tbody>
               
            </Table>



            <div className="formgg22">
                <div className="formgg2">
                    <BsFillArrowLeftSquareFill color="aqua" fontSize={40} onClick={() => history('/adminhome')}></BsFillArrowLeftSquareFill>
                </div>
            </div>

    </div>
  )
}

export default Adminpayment