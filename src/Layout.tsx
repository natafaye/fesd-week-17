import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Grocery List</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Planning</Nav.Link>
            <li className="nav-item">
              <NavLink to="/shopping" className="nav-link">Shopping</NavLink>
            </li>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Outlet /> {/* The part of the layout that's going to change depending on the page */}
      </Container>
      <footer className="bg-dark text-white text-center py-3">
        Copyright 2025
      </footer>
    </div>
  )
}