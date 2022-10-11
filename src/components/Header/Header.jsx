import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import brandImg from '../../images/quizy.png';
import './Header.css'
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/"><img src={brandImg} alt="" className="brand-image" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="topic"
                    className = {({ isActive }) =>
                        isActive ? "text-dark" : "text-light"
                      }>Topic</NavLink>
            <NavLink to="statistics"
            className = {({ isActive }) =>
            isActive ? "text-dark" : "text-light"
          }>Statistics</NavLink>
            <NavLink to="blog"
            className = {({ isActive }) =>
            isActive ? "text-dark" : "text-light"
          }>Blog</NavLink>    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;