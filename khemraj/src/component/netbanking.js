import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Table,} from 'react-bootstrap';
import '../component/style/adminpay.css'
import { useNavigate } from 'react-router-dom';
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const Netbanking = () => {

    const history = useNavigate();
    const [data, setData] = useState([]);



    useEffect(() => {
        Axios.get('http://localhost:3001/getnet').then((res) => {
            console.log(res);
            setData(res.data);
            console.log(data);
        });
    }, [data]);


  return (
    <div className='pra'>
        <div className='netbank'>
        <h2>Net banking Details:</h2>
        </div>
        <Table border={3} striped bordered hover className='bb'>
                <thead className="abc122"> 
                    <tr className='head1'>
                        
                        <th> Id</th>
                        <th>User Name</th>
                        <th >Account Number</th>
                        <th>IFSC Code</th>
                        <th>Branch Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    data.map(clientdata => {
                        return(
                            
                        <tr className="abcef">
                            <td>{clientdata.id}</td>
                            <td>{clientdata.usname}</td>
                            <td>{clientdata.accno}</td>
                            <td>{clientdata.ifsc}</td>
                            <td>{clientdata.bname}</td>
                        </tr>
                        )
                    })
                    }
                </tbody>
               
            </Table>

            <div className="formgg22">
                <div className="formgg2">
                    <BsFillArrowLeftSquareFill color="aqua" fontSize={40} onClick={() => history('/adminpayment')}></BsFillArrowLeftSquareFill>
                </div>
            </div>

    </div>
  )
}

export default Netbanking