import * as ReactBootstrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import pic from '../component/pizzaparty1.png'
import { useNavigate } from 'react-router-dom';
 function Navbar(){

    const key= localStorage.getItem('key')

    const history = useNavigate();


    function logout () {
        
        history('/google');
        localStorage.removeItem('key');

    }
    return key ? (
        <div>
        <ReactBootstrap.Navbar collapseOnSelect expand="bm" bg="dark" variant="dark">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img className="imgnav" src={pic} alt=""></img>
            <ReactBootstrap.Container>
                <ReactBootstrap.Navbar.Brand><h1>ASUS</h1></ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="responsive-ReactBootstrap.Navbar-ReactBootstrap.Nav"/>
                <ReactBootstrap.Navbar.Collapse id="responsive-ReactBootstrap.Navbar-ReactBootstrap.Nav">
               
                    <ReactBootstrap.Nav className="me-auto">
                        {/* <ReactBootstrap.Nav.Link href="Services"><h5><b>Services</b></h5></ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link href="About"><h5><b>About</b></h5></ReactBootstrap.Nav.Link> */}
                    </ReactBootstrap.Nav>
                    <ReactBootstrap.Nav>
                        {/* <ReactBootstrap.Nav.Link href="More_details"><h5><b>More_details</b></h5></ReactBootstrap.Nav.Link> */}
                        <ReactBootstrap.Nav.Link href="About"><h5><b>About Us</b></h5></ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link onClick={logout}><h5><b>logout</b></h5></ReactBootstrap.Nav.Link>
                        {/* <ReactBootstrap.Nav.Link href="register"><h5><b>Sign Up</b></h5></ReactBootstrap.Nav.Link> */}
                        <ReactBootstrap.Nav.Link eventKey={2} href="Contact"><h5><b>Contact_Us</b></h5>
                        </ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
        </div>
    ) : (
        <div>
        <ReactBootstrap.Navbar collapseOnSelect expand="bm" bg="dark" variant="dark">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img className="imgnav" src={pic} alt=""></img>
            <ReactBootstrap.Container>
                <ReactBootstrap.Navbar.Brand href="/"><h1>ASUS</h1></ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="responsive-ReactBootstrap.Navbar-ReactBootstrap.Nav"/>
                <ReactBootstrap.Navbar.Collapse id="responsive-ReactBootstrap.Navbar-ReactBootstrap.Nav">
               
                    <ReactBootstrap.Nav className="me-auto">
                        {/* <ReactBootstrap.Nav.Link href="Services"><h5><b>Services</b></h5></ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link href="About"><h5><b>About</b></h5></ReactBootstrap.Nav.Link> */}
                    </ReactBootstrap.Nav>
                    <ReactBootstrap.Nav>
                        {/* <ReactBootstrap.Nav.Link href="More_details"><h5><b>More_details</b></h5></ReactBootstrap.Nav.Link> */}
                        <ReactBootstrap.Nav.Link href="About"><h5><b>About Us</b></h5></ReactBootstrap.Nav.Link>
                        {/* <ReactBootstrap.Nav.Link href="#"><h5><b>logout</b></h5></ReactBootstrap.Nav.Link> */}
                        {/* <ReactBootstrap.Nav.Link href="register"><h5><b>Sign Up</b></h5></ReactBootstrap.Nav.Link> */}
                        <ReactBootstrap.Nav.Link eventKey={2} href="Contact"><h5><b>Contact_Us</b></h5>
                        </ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
        </div>
    )
}
export default Navbar
