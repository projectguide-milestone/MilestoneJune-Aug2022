import React from 'react';
import './style/home.css';
import {Table,} from 'react-bootstrap';


export const Home = () => {
  return(
    
    <div className="khem">
      <div>
        <form>
        {/* <marquee> */}
          <h1>Advertising Source Service</h1> 
          {/* </marquee> */}

        <div className='pro1'>
          <a href="profile" className="pro"><p><li>Profile</li></p></a>

          </div>
          <h2>
            <a href="Record" className="as"><p><li>Agent</li></p></a>
            
          </h2>
         
        </form>
        <form >
          <div className='khem5'>
          <Table  border={3} striped bordered hover className='tb' >
          <thead className="tbh">
                    <tr>
                        <th>Agent Name</th>
                        <th>Agent Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><p className='tbh1'>Facebook</p></td>
                        <td><p className='tbh1'>5220 </p></td>
                        <td><a href='details' className='xyz'><button3>View details</button3></a></td>
                      </tr>
                 </tbody>
                 <tbody className="tb">
                    <tr>
                        <td><p className='tbh1'>Instagram</p></td>
                        <td><p className='tbh1'>1585</p></td>
                        <td><a href='details' className='xyz'><button3>View details</button3></a></td>
                      </tr>
                 </tbody>
                 <tbody className="tb">
                    <tr>
                        <td><p className='tbh1'>posting</p></td>
                        <td><p className='tbh1'>2591</p></td>
                        <td><a href='details' className='xyz'><button3>View details</button3></a></td>
                      </tr>
                 </tbody>
                 <tbody className="tb">
                    <tr>
                        <td><p className='tbh1'>JKL</p></td>
                        <td><p className='tbh1'>4750</p></td>
                        <td><a href='details' className='xyz'><button3>View details</button3></a></td>
                      </tr>
                 </tbody>
            
          </Table>
          </div>


          <div className='khem6'>
          <Table  border={3} striped bordered hover className='tb' >
          <thead className="tbh">
                    <tr>
                        <th>Agent Name</th>
                        <th>Agent Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><p className='tbh1'>Facebook</p></td>
                        <td><p className='tbh1'>5220 </p></td>
                        <td><a href='details' className='xyz'><button3>View details</button3></a></td>
                      </tr>
                 </tbody>
                 <tbody className="tb">
                    <tr>
                        <td><p className='tbh1'>Instagram</p></td>
                        <td><p className='tbh1'>1585</p></td>
                        <td><a href='details' className='xyz'><button3>View details</button3></a></td>
                      </tr>
                 </tbody>
                 <tbody className="tb">
                    <tr>
                        <td><p className='tbh1'>posting</p></td>
                        <td><p className='tbh1'>2591</p></td>
                        <td><a href='details' className='xyz'><button3>View details</button3></a></td>
                      </tr>
                 </tbody>
                 <tbody className="tb">
                    <tr>
                        <td><p className='tbh1'>JKL</p></td>
                        <td><p className='tbh1'>4750</p></td>
                        <td><a href='details' className='xyz'><button3>View details</button3></a></td>
                      </tr>
                 </tbody>
            
          </Table>
          </div>

        </form>
      </div>
    </div>
  )
}
export default Home

