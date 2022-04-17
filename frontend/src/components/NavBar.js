import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

// Coming back later to add toggle for responsiveness

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/forum">Forum</Nav.Link>
            <Nav.Link as={Link} to="/members">Members</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;