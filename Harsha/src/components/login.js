import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
            <div class="container-fluid login-wrapper">
      <div class="row">
        <div class="col-6">

        </div>
        <div class="col-6 pt-5 ">
          <form >
  <div class="mb-3">
  <center>
              <h2>Login </h2>
            </center>
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <p>Don't have an Account? <a href="signup">Sign up here</a></p>
    <p>Forgot Password? <a href="forget">Click here</a></p>
  </div>
  <Link to='/home'>
  <button   name="login_btn" class="btn btn-primary">Submit</button></Link>
</form>
        </div>
      </div>
    </div>
    {/* <audio id="myAudio">
  <source src="../Audio/myAudio.ogg" type="audio/ogg">
  <source src="../Audio/myAudio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio> */}
<span id="sample"></span>
    </div>
  )
}

export default Login