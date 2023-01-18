import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import '../Stylesheets/Nav.css'

function NavbarDarkExample() {
  return (
    <Navbar className='nav' variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand><Link to="/MovieFinder"><img className='Logo' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" srcset="" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Movies"
              menuVariant="dark"
            >
              <NavDropdown.Item><Link to="/MovieFinder/details/Popular">Popular</Link></NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/MovieFinder/details/now_playing">Now Playing</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to="/MovieFinder/details/upcoming">Upcomming</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to="/MovieFinder/details/top_rated">Top Rated</Link></NavDropdown.Item>
              <NavDropdown.Divider />

            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="TV Shows"
              menuVariant="dark"
            >
              <NavDropdown.Item><Link to="/MovieFinder/details/tv/Popular">Popular</Link></NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/MovieFinder/details/tv/on_the_air">Air Today</Link>
              </NavDropdown.Item>
              <NavDropdown.Item><Link to="/MovieFinder/details/tv/airing_today">On TV</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/MovieFinder/details/tv/top_rated">Top Rated</Link></NavDropdown.Item>
              <NavDropdown.Divider />

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>

  );
}

export default NavbarDarkExample;