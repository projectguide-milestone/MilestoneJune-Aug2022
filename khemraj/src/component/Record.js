import React, {useState, useEffect} from 'react';
import './style/Record.css'
import {Table,} from 'react-bootstrap';
import Axios from 'axios'


export const Record = () => {

    
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



                 {/* <tbody className="abc">
                    
                    <tr>
                        <td><p className='abc'>Adpost</p></td>
                        <td><p className='abc'>1585</p></td>
                        <td><a href='details1'><button>View details</button></a></td>
                      </tr>
                 </tbody>
                 
                 <tbody className="abc">
                    <tr>
                        <td><p className='abc'>ClassifiedAds</p></td>
                        <td><p className='abc'>2591</p></td>
                        <td><a href='details2'><button>View details</button></a></td>
                      </tr>
                 </tbody>
                 <tbody className="abc">
                    <tr>
                        <td><p className='abc'>eBay</p></td>
                        <td><p className='abc'>4750</p></td>
                        <td><a href='details3'><button>View details</button></a></td>
                      </tr>
                 </tbody> */}
                 </Table>
                 </div>
                 <br/><br/>
                 <div className="form-row">
                    {/* <BsFillArrowLeftSquareFill color="green" fontSize={50} onClick={() => history('/Services')}></BsFillArrowLeftSquareFill> */}
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