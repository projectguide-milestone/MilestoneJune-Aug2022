import { useEffect, useState } from 'react';
import {Table, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';

export const HomePage = () => {

    const history = useNavigate();
    const nextPath = () => {
        history('/update')
    }

    const [client, setClient] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/getclient').then((res) => {
            console.log(res);
            setClient(res.data);
            console.log(client);
        });
    }, []);

    const getClient = () => {
        /*Axios.get('http://localhost:3001/getclient').then((res) => {
            console.log(res);
            setClient(res.data);
            console.log(client);
        });*/
    }

    const deleteClient =(e, id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
            alert("Client deleted")
        })
    }

    return (
        <div>
            <div>
                <h2>Client Record</h2>
            </div>
            <Button onClick={getClient}>Show</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Client Name</th>
                        <th>Client Id</th>
                        <th>Client Company</th>
                        <th>State</th>
                        <th>Transaction Id</th>
                        <th>Transaction Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{
                    client.map(clientdata => {
                        return(
                        <tr>
                            <td>{clientdata.Client_Name}</td>
                            <td>{clientdata.Client_Id}</td>
                            <td>{clientdata.Client_Company}</td>
                            <td>{clientdata.State}</td>
                            <td>{clientdata.Transaction_Id}</td>
                            <td>{clientdata.Transaction_Status}</td>
                            <td>
                                <Button onClick={() => history(`/update/${clientdata.Client_Id}`)}>Edit</Button>
                                <Button onClick={(e) => deleteClient(e, clientdata.Client_Id)}>Delete</Button>
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