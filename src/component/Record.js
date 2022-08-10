import React, {useState, useEffect} from 'react';
import './style/Record.css'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

import {Table,} from 'react-bootstrap';


 const Record = () => {

  const history = useNavigate();

  const [data, setData] = useState([]);

  const deleterecord = (e, id) =>{
    
    Axios.delete('http://localhost:3001/delete',{
        e:e,
        id:id
    }).then((response) =>{
        alert("deleted")
    })     
  }


//   const insertrecord =()=>{
//     Axios.post('http://localhost:3001/post').then((req) => {
//         console.log(req);
//         setData(req.data);
//         console.log(data);
//   });
// }

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
                                {/* <button onClick={() =>insertrecord(clientdata.id)}>create</button> */}
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


export default Record


    // const history = useNavigate();

//     return (
//         <div className="khem1">
//             <div>
            
//             <center><h2 className='yy'>Agents Record</h2></center>
//             </div>
//             <center>
//               <div className='tbh'>

// <table>

// </table>
//             <Table border={3} striped bordered hover className='bb'>
//                 <thead className="abc1">
//                     <tr>
//                         <th>Agent Name</th>
//                         <th>Agent Id</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody className='abc'>
//                     <tr>
//                         <td><p className='abc'>Facebook</p></td>
//                         <td><p className='abc'>5220 </p></td>
//                         <td><a href='details'><button>View details</button></a></td>
//                       </tr>
//                  </tbody>
//                  <tbody className="abc">
//                     <tr>
//                         <td><p className='abc'>Adpost</p></td>
//                         <td><p className='abc'>1585</p></td>
//                         <td><a href='details'><button>View details</button></a></td>
//                       </tr>
//                  </tbody>
//                  <button>show</button>



//                  {/* 
                 
//                  agent details Link
                 
//                  https://mobilemonkey.com/blog/free-advertising-sites */}


                 
//                  <tbody className="abc">
//                     <tr>
//                         <td><p className='abc'>ClassifiedAds</p></td>
//                         <td><p className='abc'>2591</p></td>
//                         <td><a href='details'><button>View details</button></a></td>
//                       </tr>
//                  </tbody>
//                  <tbody className="abc">
//                     <tr>
//                         <td><p className='abc'>eBay</p></td>
//                         <td><p className='abc'>4750</p></td>
//                         <td><a href='details'><button>View details</button></a></td>
//                       </tr>
//                  </tbody>
//                  {/* <tbody className="abc">
//                     <tr>
//                         <td><p className='abc'>Adpost</p></td>
//                         <td><p className='abc'>9740</p></td>
//                         <td><a href='details'><button>View details</button></a></td>
//                       </tr>
//                  </tbody>
//                  <tbody className="abc">
//                     <tr>
//                         <td><p className='abc'>Google My Business</p></td>
//                         <td><p className='abc'>9500</p></td>
//                         <td><a href='details'><button>View details</button></a></td>
//                       </tr>
//                  </tbody>
//                  <tbody className="abc">
//                     <tr>
//                         <td><p className='abc'>Craigslist</p></td>
//                         <td><p className='abc'>4598</p></td>
//                         <td><a href='details'><button>View details</button></a></td>
//                       </tr>
//                  </tbody>
//                  <tbody className="abc">
//                     <tr>
//                         <td><p className='abc'>Oodle</p></td>
//                         <td><p className='abc'>3258</p></td>
//                         <td><a href='details'><button>View details</button></a></td>
//                       </tr>
//                  </tbody>
//                  <tbody className="abc">
//                     <tr>
//                         <td><p className='abc'>OLX</p></td>
//                         <td><p className='abc'>4456</p></td>
//                         <td><a href='details'><button>View details</button></a></td>
//                       </tr>
//                  </tbody>
//                  <tbody className="abc">
//                     <tr>
//                         <td><p className='abc'>Gumtree</p></td>
//                         <td><p className='abc'>7536</p></td>
//                         <td><a href='details'><button>View details</button></a></td>
//                       </tr>
//                  </tbody>
//                  <tbody className="abc">
//                     <tr>
//                         <td><p className='abc'>Sales Spider</p></td>
//                         <td><p className='abc'>1211</p></td>
//                         <td><a href='details'><button>View details</button></a></td>
//                       </tr>
//                  </tbody>
//                  <tbody className="abc">
//                     <tr>
//                         <td><p className='abc'>PennySaver</p></td>
//                         <td><p className='abc'>9875</p></td>
//                         <td><a href='details'><button>View details</button></a></td>
//                       </tr>
//                  </tbody>
//                  <tbody className="abc">
//                     <tr>
//                         <td><p className='abc'>Geebo</p></td>
//                         <td><p className='abc'>1413</p></td>
//                         <td><a href='details'><button>View details</button></a></td>
//                       </tr>
//                  </tbody>
//                  <tbody className="abc">
//                     <tr>
//                         <td><p className='abc'>Hoobly</p></td>
//                         <td><p className='abc'>1514</p></td>
//                         <td><a href='details'><button>View details</button></a></td>
//                       </tr>
//                  </tbody> */}
//                  </Table>
//                  </div>
//                  <br/><br/>
//                  <div className="form-row">
//                     {/* <BsFillArrowLeftSquareFill color="green" fontSize={50} onClick={() => history('/Services')}></BsFillArrowLeftSquareFill> */}
//                 </div>
//                  {/* <button>ok 😃</button> */}
//                  </center>
//                  </div>
//     )
// }