import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import Axios from 'axios'
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import "./design.css"

const Regisiter = () => {

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const registerUser = () => {
        Axios.post('http://localhost:3001/register', {
            
        user: user,
            pwd: pwd
        }).then(() => {
            console.log('Successfully added User.')
            alert("User Added Successfully!")
        });
    };

    const userLogin = () => {
        Axios.post('http://localhost:3001/login', {
            user: username,
            pwd: password
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
              } else {
                setLoginStatus(response.data[0].username);
                console.log(loginStatus);
              }
        });
    };

    useEffect(() => {
        Axios.get('http://localhost:3001/login').then((response) => {
            console.log(response);
            if (response.data.loggedIn == true){
                setLoginStatus(response.data.user[0].Username);
                console.log(loginStatus);
            }
        });
    }, []);

    const display = () => {
        console.log(user);
        console.log(pwd);
    }

    return(
      <section className='forms top'>
        <div className='container'>
            <div className='sign-box'>
            <h1>Registration</h1>
            <HeadTitle />
                
                <label>Username</label>
                <input onChange={(e)=>{setUser(e.target.value)}} placeholder='UserName'></input>
                <label>Password</label>
                <input type="password" onChange={(e)=>{setPwd(e.target.value)}} placeholder='Password'></input>
                <Button onClick={registerUser} className='primary-btn'> Register </Button>
            </div>
            
            <h1>{loginStatus}</h1>
        </div>
      </section>
    )
}

export default Regisiter