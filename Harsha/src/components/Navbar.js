import * as ReactBootstrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

 function Navbar(){
    return (
        <div>
        <ReactBootstrap.Navbar collapseOnSelect expand="bm" bg="dark" variant="dark">
            <ReactBootstrap.Container>
                <ReactBootstrap.Navbar.Brand href="home"><h1>Wheelz_Zone</h1></ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="responsive-ReactBootstrap.Navbar-ReactBootstrap.Nav"/>
                <ReactBootstrap.Navbar.Collapse id="responsive-ReactBootstrap.Navbar-ReactBootstrap.Nav">
                    <ReactBootstrap.Nav className="me-auto">
                    </ReactBootstrap.Nav>
                    <ReactBootstrap.Nav>
                        <ReactBootstrap.Nav.Link href="About"><h5><b>About Us</b></h5></ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link href="login"><h5><b>Login</b></h5></ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link href="signup"><h5><b>Sign Up</b></h5></ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link eventKey={2} href="contact"><h5><b>Contact_Us</b></h5>
                        </ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
        </div>
    )
}
export default Navbar