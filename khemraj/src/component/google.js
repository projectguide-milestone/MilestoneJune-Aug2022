import React, { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode"
// import Home from './home'
// import Adminhome from './admin/adminhome'
import './style/login.css'
import { Link, useNavigate } from 'react-router-dom'


const Google = () => {

        const history = useNavigate();

        

const [ user, setUser ] = useState({});


    
    function handleCallbackResponse(response){
   console.log("Encoded jwr ID token:" +response.credential)
  var userObject = jwt_decode(response.credential);
  console.log(userObject);
  setUser(userObject);

  localStorage.setItem('key',user.name);
  document.getElementById("signInDiv").hidden = true;
    }

//     function handleSignOut(event) {
//         setUser({});
//         document.getElementById("signInDiv").hidden = false;
//         localStorage.removeItem('key');
//     }


   useEffect(() => {
    /*global google*/
   google.accounts.id.initialize({
    client_id: "109420454933-ru5ckavelicinfidkeqdrbechfv82ua8.apps.googleusercontent.com",
    callback: handleCallbackResponse
   });

   google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    { theme: "outline", size: "large"}
   );

   google.accounts.id.prompt();
   },
   []
   );
 
console.log('user'+user.email)
localStorage.setItem('isadmin',user.email)

const admin = localStorage.getItem('isadmin')

  return admin==='khemraj8151@gmail.com' ? (
    <div>
        <div>
        <div id="signInDiv">
        </div>
        </div>
        {  Object.keys(user).length !== 0 &&
        <div>
        {/* <button onClick={(e) => handleSignOut(e)}>Sign out</button> */}
       
</div>
        }
       
     
{
    user &&
    <div className='imgmain'> 
    <h1>Welcome To Advertising Source & services</h1>
    <h2>Admin Profile Page</h2>
    <img className='img555' src={user.picture} alt="Jane"></img>
<h4 className='nnn'><span className='span'>name:</span>  <span className='span'>{user.name}</span></h4>
<h4><span className='span'>Email Id:</span>  <span className='span'>{user.email}</span></h4>
</div>
}
{

        Object.keys(user).length > 0 &&
        <div className='imgmain'>
        {/* <Adminhome></Adminhome> */}
        {/* <Link to="/adminhome"> */}
               <button onClick={() => history(`/adminhome`)} >Go to home page</button>
               {/* </Link>  */}
        </div>
}

{/* {  Object.keys(user).length !== 0 &&
        <div>

</div>
        } */}

        </div>
  ):(
        <div>
                   <div id="signInDiv">

</div>


        <div>


        {
   Object.keys(user).length > 0 &&
    <div className='imgmain'> 
                 <h1>Welcome To Advertising Source & services</h1>
                 <h2>Profile Page</h2>
                 <img className='img555' src={user.picture} alt="Jane"></img>
        <h4 className='nnn'><span className='span'>name:</span>  <span className='span'>{user.name}</span></h4>
        <h4><span className='span'>Email Id:</span>  <span className='span'>{user.email}</span></h4>
        </div>
}

        {

                Object.keys(user).length > 0 &&
                <div className='imgmain'>
                {/* <Home></Home> */}
               
               <Link to="/home">
               <button >Go to home page</button>
               </Link> 
                </div>
        }
        </div>
        </div>
  )
}

export default Google

















// import React, { useState } from 'react'
// import GoogleLogin from 'react-google-login';


// const Google = () => {

//     const [loginData, setLoginData] = useState(
//         localStorage.getItem('loginData')
//         ? JSON.parse(localStorage.getItem('loginData'))
//         : null
//     );


//     const handleFailure = (result) => {
//         alert(result);
//     };

//     const handleLogin = async (googleData) => {
//       const res = await fetch('/api/google-login', {
//         method: 'POST',
//         body: JSON.stringify({
//             token: googleData.tokenId,
//         }),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//       });


//       const data = await res.json();
//       setLoginData(data);
//       localStorage.setItem('loginData', JSON.stringify(data));

//      };
//     const handleLogout = () => {
//         localStorage.removeItem('loginData');
//         setLoginData(null);
//     };


//   return (
//     <div>
//                <h1>React google login</h1>
// <div>
// {
//     loginData ? (
//         <div>
//             <h3>You logged in as {loginData.email}</h3>
//             <button onClick={handleLogout}>Logout</button>
//         </div>
//     ) : (
//         <GoogleLogin
//         clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
//         buttonText="Log in with google"
//         onSuccess={handleLogin}
//         onFailure={handleFailure}
//         cookiePolicy={'single_host_origin'}
//         >
//       </GoogleLogin>
//     )
// }
 

// </div>
//     </div>
//   )
// }

// export default Google