import React from 'react'
import './style/side.css';
import Axios from 'axios'
import {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import {
    FaBuromobelexperte,
     FaAdn,
    FaRegChartBar,
      FaPager,
    FaBars,
    FaThList
} from "react-icons/fa"
import pic1 from '../component/pizzaparty1.png'


import ContactPageIcon from '@mui/icons-material/ContactPage';

const Sidebar = ({children}) => {
        const[isOpen ,setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);

    const menuItem=[
        {
            path:"/adminhome",
            name:"Home",
            icon:<FaBuromobelexperte/>
        },
        {
            path:"/adminagent",
            name:"Agent",
            icon:< FaAdn/>
        },
        {
            path:"/adminrecord",
            name:"User Records",
            icon:<FaRegChartBar/>
        },
        {
            path:"/adminpayment",
            name:"Payment",
            icon:<  FaPager/>
        },
        {
            path:"/About",
            name:"About",
            icon:<FaThList/>
        },
        {
            path:"/admincontact",
            name:"Contact Us",
            icon:<ContactPageIcon/>
        }
    ]


 

    const [data, setData] = useState([]);
    const history = useNavigate();


    useEffect(() => {
        Axios.get('http://localhost:3001/getproduct').then((res) => {
            console.log(res);
            setData(res.data);
            console.log(data);
        });
    }, [data]);


  return (
    <div className="con">
        <div style={ {width: isOpen ? "300px" : "50px" }} className="sidebar">
            <div className="top_sec">
                <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img className='imgpic' src={pic1} alt=""></img></h1>
                <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                      <FaBars onClick={toggle}/>
                </div>
            </div>
              {
                menuItem.map((items, index)=>(
                     <NavLink to={items.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{items.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{items.name}</div>
                     </NavLink>
                ))
              }
        </div>
        <main>{children}
    <div>
           admin home
           {
                    data.map(clientdata => {
                        return(

        <div>
            <div class="container-fluid px-3 pb-3 ">
                <div class="row">
                    <div class="col-4">
                       <div class="card" >
                           <img src={clientdata.pic} className="iiii" class="card-img-top card-image" alt="..." />
                            <div class="card-body ms-1">
                                <h3>{clientdata.product_name}</h3>
                                     <p class="card-text">{clientdata.product_dec}</p>
                                     <p class="card-text">agent:  {clientdata.agent}</p>
                                     {/* <p>about co....</p> */}
                                     <button  onClick={() => history(`/aprj/${clientdata.id}`)}  value="Aprove" className='pranjal'>Status form</button><br></br><br></br>
                                     {/* <button  onChange={() => history(`/aprj/${clientdata.id}`)}  value="Reject" className='pranjal1'>Reject</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                        )
})
}


    </div>
        </main>
    </div>
  )
}

export default Sidebar