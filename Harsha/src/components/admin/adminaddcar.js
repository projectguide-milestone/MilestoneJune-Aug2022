import React from 'react'
import '../style/adminaddcar.css'

const Adminaddcar = () => {
  return (
    <div className='main'>
    <div>
        <form method="post" class="form-horizontal" enctype="multipart/form-data">
    <div class="form-group">
    <label class="col-sm-2 control-label">Vehicle Title<span /*style="color:red"*/>*</span></label>
    <div class="col-sm-4">
    <input type="text" name="vehicletitle" class="form-control" required />
    </div>
    <label class="col-sm-2 control-label">Select Brand<span /*style="color:red"*/>*</span></label>
    <div class="col-sm-4">
    <select class="selectpicker" name="brandname" required>
    <option value=""> Select </option>
    <option value=""> Audi </option>
    <option value=""> BMW </option>
    <option value=""> Ford </option>
    <option value=""> Masarati </option>
    <option value=""> Mercedes Benz </option>
    <option value=""> Ferrari </option>
    <option value=""> Skoda </option>
    <option value=""> Hyundai </option>
    <option value=""> Tata Nexon </option>
    <option value=""> Alto </option>
    <option value=""> Baleno </option>
    <option value=""> Mahindra E-V </option>
    
    </select>
    </div>
    </div>
                                                
    <div class="hr-dashed"></div>
    <div class="form-group">
    <label class="col-sm-2 control-label">Vehicle Overview<span /*style="color:red"*/>*</span></label>
    <div class="col-sm-10">
    <textarea class="form-control" name="vehicalorcview" rows="3" required></textarea>
    </div>
    </div>
    
    <div class="form-group">
    <label class="col-sm-2 control-label">Price Per Day<span /*style="color:red"*/>*</span></label>
    <div class="col-sm-4">
    <input type="text" name="priceperday" class="form-control" required />
    </div>
    <label class="col-sm-2 control-label">Select Fuel Type<span /*style="color:red"*/>*</span></label>
    <div class="col-sm-4">
    <select class="selectpicker" name="fueltype" required>
    <option value=""> Select </option>
    
    <option value="Petrol">Petrol</option>
    <option value="Diesel">Diesel</option>
    {/* <option value="CNG">CNG</option> */}
    </select>
    </div>
    </div>
    
    
    <div class="form-group">
    <label class="col-sm-2 control-label">Model Year<span /*style="color:red"*/>*</span></label>
    <div class="col-sm-4">
    <input type="text" name="modelyear" class="form-control" required />
    </div>
    <label class="col-sm-2 control-label">Seating Capacity<span /*style="color:red"*/>*</span></label>
    <div class="col-sm-4">
    <input type="text" name="seatingcapacity" class="form-control" required />
    </div>
    </div>
    <div class="hr-dashed"></div>
    </form>
    
    <div class="form-group">
    <div class="col-sm-12">
    <h4><b>Upload Images</b></h4>
    </div>
    </div>
    
    
    <div class="form-group">
    <div class="col-sm-4">
    Image 1*   <span /*style="color:red"*/></span><input type="file" name="img1" required />
    </div>
    <div className='img'>
    <div  class="col-sm-4">
    Image 2*   <span /*style="color:red"*/></span><input type="file" name="img2" required />
    </div></div>
    
    </div>
    <div class="hr-dashed"></div>									
    </div>
   
                                
    
    <div class="row">
    <form class="col-md-12">
    <div class="panel panel-default">
    <div class="panel-heading">Accessories</div>
    <div class="panel-body">
    
    
    <div class="form-group">
    <div class="col-sm-3">
    <div class="checkbox checkbox-inline">
    <input type="checkbox" id="airconditioner" name="airconditioner" value="1" />
    <label for="airconditioner"> Air Conditioner </label>
    </div>
    </div>
    <div class="col-sm-3">
    <div class="checkbox checkbox-inline">
    <input type="checkbox" id="powerdoorlocks" name="powerdoorlocks" value="1" />
    <label for="powerdoorlocks"> Power Door Locks </label>
    </div></div>
    <div class="col-sm-3">
    <div class="checkbox checkbox-inline">
    <input type="checkbox" id="antilockbrakingsys" name="antilockbrakingsys" value="1" />
    <label for="antilockbrakingsys"> AntiLock Braking System </label>
    </div></div>
    <div class="checkbox checkbox-inline">
    <input type="checkbox" id="brakeassist" name="brakeassist" value="1" />
    <label for="brakeassist"> Brake Assist </label>
    </div>
    </div>
    </div>
    </div>
    
    
    <div class="form-group">
    <div class="col-sm-3">
    <div class="checkbox checkbox-inline">
    <input type="checkbox" id="powersteering" name="powersteering" value="1" />
    <label for="inlineCheckbox5"> Power Steering </label>
    </div>
    </div>
    <div class="col-sm-3">
    <div class="checkbox checkbox-inline">
    <input type="checkbox" id="driverairbag" name="driverairbag" value="1" />
    <label for="driverairbag">Driver Airbag</label>
    </div>
    </div>
    <div class="col-sm-3">
    <div class="checkbox checkbox-inline">
    <input type="checkbox" id="passengerairbag" name="passengerairbag" value="1" />
    <label for="passengerairbag"> Passenger Airbag </label>
    </div></div>
    <div class="checkbox checkbox-inline">
    <input type="checkbox" id="powerwindow" name="powerwindow" value="1" />
    <label for="powerwindow"> Power Windows </label>
    </div>
    </div>
    
    
    <div class="form-group">
    <div class="col-sm-3">
    <div class="checkbox checkbox-inline">
    <input type="checkbox" id="cdplayer" name="cdplayer" value="1" />
    <label for="cdplayer"> CD Player </label>
    </div>
    </div>
    <div class="col-sm-3">
    <div class="checkbox h checkbox-inline">
    <input type="checkbox" id="centrallocking" name="centrallocking" value="1" />
    
    <label for="leatherseats"> Leather Seats </label>
    </div>
    </div>
    </div>
    
    
    
    
                                                <div class="form-group">
                                                    <div class="col-sm-8 col-sm-offset-2">
                                                        <button class="btn btn-default" type="reset">Cancel</button>
                                                        <button class="btn btn-primary" name="submit" type="submit">Save changes</button>
                                                    </div>
                                                </div>
    
                                            </form>
                                            </div>
                                            </div>
  )
}

export default Adminaddcar