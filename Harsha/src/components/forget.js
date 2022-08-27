import React from 'react'
import { Link } from 'react-router-dom'
const Forget = () => {
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
      <h2>Forget Password</h2>
    </center>
<label for="exampleInputEmail1" class="form-label">Enter you Email address</label>
<input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
</div>
<center>
    <Link to="/otp">
<button  type="submit" name="login_btn" class="btn btn-primary">Submit</button></Link></center>
</form>
</div>
</div>
</div>
<span id="sample"></span>
</div>  
)
}

export default Forget