import React from 'react'
import Axios from 'axios'
import {useState, useEffect} from 'react';
import { Table,} from 'react-bootstrap';


const Admincontact = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:3001/getcontact').then((res) => {
            console.log(res);
            setData(res.data);
            console.log(data);
        });
    }, [data]);


  return (
    <div className='wpk'>
        <Table border={3} striped bordered hover>
        <thead className="ohk">
                    <tr className='head11 '>
                        <th>Name</th>
                        <th>Email</th>
                        <th>message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    data.map(clientmessage => {
                        return(
                            
                        <tr className="abcef">
                            <td>{clientmessage.name}</td>
                            <td>{clientmessage.email}</td>
                            <td>{clientmessage.message}</td>
                        </tr>
                        )
                    })
                    }
                </tbody>
        </Table>
    </div>
  )
}

export default Admincontact