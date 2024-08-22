import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, NavLink, Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div>
      <div className="bg-primary text-white p-5">
        <h2 className="display-4">My Car Place</h2>
      </div>
      <div>
        {/* <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/newappointment">New Appointment</Link> */}

        <Navbar expand="sm" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                <Nav.Link as={NavLink} to="/newappointment">New Appointment</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Marks the spot for the page to go */}
      <Outlet />
    </div>
  )
}