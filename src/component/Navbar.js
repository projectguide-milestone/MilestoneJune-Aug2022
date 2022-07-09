import * as ReactBootstrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'

 function Navbar(){
    return (
        <div>
        <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <ReactBootstrap.Container>
                <ReactBootstrap.Navbar.Brand href="home"><h1>Sales Data</h1></ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="responsive-ReactBootstrap.Navbar-ReactBootstrap.Nav"/>
                <ReactBootstrap.Navbar.Collapse id="responsive-ReactBootstrap.Navbar-ReactBootstrap.Nav">
                    <ReactBootstrap.Nav className="me-auto">
                        <ReactBootstrap.Nav.Link href="Services"><h5><b>Services</b></h5></ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link href="Record"><h5><b>Record</b></h5></ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>
                    <ReactBootstrap.Nav>
                        {/* <ReactBootstrap.Nav.Link href="More_details"><h5><b>More_details</b></h5></ReactBootstrap.Nav.Link> */}
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

