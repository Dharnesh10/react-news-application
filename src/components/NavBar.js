import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

const NavBar = ({ category, setCategory }) => {

  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand><Badge bg="secondary p-3">News App</Badge></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => setCategory("general")} className={category === "general" ? "active text-info" : ""}>General</Nav.Link>
                    <Nav.Link onClick={() => setCategory("sports")} className={category === "sports" ? "active text-info" : ""}>Sports</Nav.Link>
                    <Nav.Link onClick={() => setCategory("business")} className={category === "business" ? "active text-info" : ""}>Business</Nav.Link>
                    <Nav.Link onClick={() => setCategory("entertainment")} className={category === "entertainment" ? "active text-info" : ""}>Entertainment</Nav.Link>
                    <Nav.Link onClick={() => setCategory("health")} className={category === "health" ? "active text-info" : ""}>Health</Nav.Link>
                    <Nav.Link onClick={() => setCategory("science")} className={category === "science" ? "active text-info" : ""}>Science</Nav.Link>
                    <Nav.Link onClick={() => setCategory("technology")} className={category === "technology" ? "active text-info" : ""}>Technology</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar