import {CartWidget} from "../CartWidget/CartWidget";
import {Container, Nav, Navbar} from "react-bootstrap";

export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="#home">JS Optical</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#item1">Item1</Nav.Link>
                        <Nav.Link href="#item2">Item2</Nav.Link>
                        <Nav.Link href="#item2">Item3</Nav.Link>
                    </Nav>
                    <Nav>
                        <CartWidget/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>









    )
}