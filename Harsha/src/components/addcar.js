import React from 'react'

const Addcar = () => {
  return (
    <div>
        
        <form class="" action="Addcar.php" method="post" enctype="multipart/form-data">
    <div class="container border py-3 my-3">
                      <center>
        <h2><strong>Add Car</strong></h2>
      </center>
      <div class="row col-md-11 ps-5 mb-3">
        <div class="col">
          <label for="" class="form-label">Name</label>
          <input type="text" class="form-control" name="Name" value="" />
        </div>
      </div>
      <div class="row col-md-11 ps-5 mb-3">
        <div class="col">
          <label for="" class="form-label">Car Type</label>
          <input type="text" class="form-control" name="Type" value="" />
        </div>
      </div>
      <div class="row col-md-11 ps-5 mb-3">
        <div class="col">
          <label for="" class="form-label">Photo</label>
          <input type="file" class="form-control" name="Image" value="" />
        </div>
      </div>
      <div class="row col-md-11 ps-5 mb-3">
        <div class="col">
          <label for="" class="form-label">Description</label>
          <input type="textarea" class="form-control" name="Description" value="" />
        </div>
      </div>
      <div class="row col-md-11 ps-5 mb-3">
        <div class="col">
          <label for="" class="form-label">Address</label>
          <input type="textarea" class="form-control" name="Address" value="" />
        </div>
      </div>
      <div class="row col-md-11 ps-5 mb-3">
        <div class="col">
          <label for="" class="form-label">Price</label>
          <input type="text" class="form-control" name="Price" value="" /> 
        </div>
      </div>
      <div class="row col-md-11 ps-5 mb-3">
        <div class="col">
          <input type="submit" class="btn btn-outline-primary" name="btn-Add" value="Add" />
        </div>
      </div>
    </div>
  </form>
    </div>
  )
}

export default Addcar