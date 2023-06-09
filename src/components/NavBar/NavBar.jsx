import {CartWidget} from "../CartWidget/CartWidget";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import './navBar.css'

export const NavBar = () => {
    return (
        <Navbar collapseOnSelect className="navBar" expand="lg">
            <Container>
                <Navbar.Brand><Link className="linkOutDecoration" to="/">Magoo</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>< Link className="linkOutDecoration" to="/">Productos</Link></Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                < Link className="linkOutDecoration"
                                       to="/products/maquillaje">Maquillajes</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="linkOutDecoration" to="/products/perfume">Perfumes</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Link className="linkOutDecoration" to="/cart"><CartWidget/></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}