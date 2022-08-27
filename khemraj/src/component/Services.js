import React from 'react'
// import { BsFillArrowLeftSquareFill } from "react-icons/bs";
// import {useNavigate} from 'react-router-dom';


export const Services = () => {

//   const history = useNavigate();

  return (

    <center>
        <br/><br/>
        <div className="container">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Advertising agent :&nbsp;&nbsp;
                            <input type="text" name="ClientName"></input>
                        </label>
                    </div>
                </div>
                <br/><br/>
                {/* <div className="form-row">
                    <BsFillArrowLeftSquareFill color="aqua" fontSize={40} onClick={() => history('/home')}></BsFillArrowLeftSquareFill>
                </div> */}
            </form>
        </div>
        </center>
  )
}
export default Services
