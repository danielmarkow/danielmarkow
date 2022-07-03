import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from 'react-bootstrap';

import {LinkContainer} from 'react-router-bootstrap'

export default function Header() {
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid="sm">
          <Navbar.Brand>Daniel Markow - Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/danielmarkow">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/danielmarkow/aboutme">
                <Nav.Link>About me</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/danielmarkow/projects">
                <Nav.Link>Projects</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}