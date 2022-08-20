import React from 'react'
import Form from 'react-bootstrap/Form'
import * as ReactBootStrap from "react-bootstrap";
import './Login.css';


function Login() {
  return (
    <div className='LoginForm'>
    <ReactBootStrap.Form>
    <div>
        <Form.Group controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
        <Form.Control size='lg' type="email" placeholder="Enter email" />
         <Form.Text className="text-muted">
             We'll never share your email with anyone else.
         </Form.Text>
        </Form.Group>
     </div> 
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <ReactBootStrap.Button variant="primary" type="submit">
      Submit
    </ReactBootStrap.Button>
  </ReactBootStrap.Form>
  </div>
  )
}

export default Login