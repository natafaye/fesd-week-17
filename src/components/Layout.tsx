import { Container, Navbar, Nav, ListGroup } from "react-bootstrap";
import { Link, Outlet } from "react-router";

export default function Layout() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#home">Payroll Thing</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/employees">Employees</Nav.Link>
                            <Nav.Link as={Link} to="/paychecks">Paychecks</Nav.Link>
                            <Nav.Link as={Link} to="/paychecks/add">Add Paycheck</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="container-fluid">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-2">
                        <ListGroup>
                            <ListGroup.Item>
                                <Link to="/">Home</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/employees">Employees</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/paychecks/add">Add Paycheck</Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                    {/* Main Content */}
                    <div className="col">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}