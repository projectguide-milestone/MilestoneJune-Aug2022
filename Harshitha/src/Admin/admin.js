import { useEffect, useState } from 'react';
import {Table, Button} from 'react-bootstrap';
import {useNavigate, Link} from 'react-router-dom';
import Axios from 'axios';
import './admin.css'
const Admin = () => {

    const history = useNavigate();
    const nextPath = () => {
        history('/update')
    }

    const [house, setHouse] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/gethouse').then((res) => {
            console.log(res);
            setHouse(res.data);
            console.log(house);
        });
    }, []);

    const getHouse = () => {
        /*Axios.get('http://localhost:3001/gethouse').then((res) => {
            console.log(res);
            sethouse(res.data);
            console.log(house);
        });*/
    }

    const deleteHouse =(e, id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
            alert("House deleted")
        })
    }

    return (
        
        <div>
            <div>
                <h2>House Record</h2><br/>
            </div>
            <p><Link to="/create" classname='primary-btn'>Add House</Link></p><br/>
            <Table cellPadding={15} border="5">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>House type</th>
                        <th>Address</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{
                    house.map(housedata => {
                        return(
                        <tr>
                            <td>{housedata.id}</td>
                            <td>{housedata.name}</td>
                            <td>{housedata.house_type}</td>
                            <td>{housedata.address}</td>
                            <td>{housedata.amount}</td>
                            <td>
                                <Button onClick={() => history(`/update/${housedata.id}`)}>Edit</Button>
                                <Button onClick={(e) => deleteHouse(e, housedata.id)}>Delete</Button>
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



export default Admin;