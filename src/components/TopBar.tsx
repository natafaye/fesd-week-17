import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function TopBar() {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <Nav.Link as={NavLink} to="/new">Schedule</Nav.Link>
                        <Nav.Link as={NavLink} to="/appointments">Appointments</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


// react bootstrap
// Nav.Link = () => {
//     return <a className="nav-link"></a>
// }


// // react router dom
// NavLink = () => {
//     // hey if you click on this tell react router
//     return <button onClick={tellReactRouter}></button>
// }