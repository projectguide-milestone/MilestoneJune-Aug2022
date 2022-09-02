import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './style/login.css'
import  profile from "./5087579.png";
import  Axios from 'axios';
import { useState } from 'react';



export const Login = () => {
  


  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  
  // const [loginStatus, setLoginStatus] = useState("");
  // const [disable, setDisable] = useState(0);


  Axios.defaults.withCredentials = true;

  const userLogin = () => {
    Axios.post('http://localhost:3001/userLogin', {
        name: name,
        password: password
    }).then((response) => {


      console.log('response');
        // if (response.data.message) {
        //     setLoginStatus(response.data.message);
       
        //   } else {
        //     setLoginStatus(response.data[0].name);
        //     console.log(loginStatus);
           
        //   }
    });
    // setDisable(true);

};

// useEffect(() => {
//     Axios.get('http://localhost:3001/login').then((response) => {
//         console.log(response);
//         if (response.data.loggedIn === true)
//         {
//             setLoginStatus(response.data.name[0].name);
//             console.log(loginStatus);
//         }
//     });
// }, );

const display = () => {
    console.log(name);
    console.log(password);
}


  return(
    <div  className='main1'>
      <div className='sub-main1'>
        <div>
          <div className='img1'>
            <div className='container-image22'>
              <img src={profile} alt="profile" className="profile"/>
            </div>


          </div>
          <div>
            <h1> Login</h1>
            <div className="name3">
      
              <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder=" Username" className="name10" required/>
            </div>
            <div className="second-input">
             
              <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" className="name10" required/>
            </div>

<div className='poi'>
            <button onClick={userLogin} /*disabled={disable}*/> Login </button></div>
            
              <p className="link1">
                <a href="forgot">Forgot password?</a> or <a href="register">Sign up</a>
              </p>
            
          </div>
          {/* <h1>{loginStatus}</h1> */}
          <h1>{display}</h1>

        </div>

      </div>
    </div>
  )
}

export default Login
