import { Nav, Navbar, Button } from "react-bootstrap"

export const Header = () => {
    return (
        <Navbar>
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/footer">Footer</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}