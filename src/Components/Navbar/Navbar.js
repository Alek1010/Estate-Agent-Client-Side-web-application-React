// Importing React and required Bootstrap components
import React from "react";
import "./Navbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// Defining the NavBar functional component
const NavBar = () => {
    return (
        <Navbar expand="lg" className="custom-navbar" fixed="top">
            <Container>
                {/* Brand logo */}
                <Navbar.Brand href="#home" className="logo-text">
                    Moving Right
                </Navbar.Brand>

                {/* Navbar toggle for small screens */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Collapsible navigation links */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className={`nav-link ${window.location.pathname === "/" ? "active" : ""}`}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="/properties" className={`nav-link ${window.location.pathname === "/properties" ? "active" : ""}`}>
                            Properties
                        </Nav.Link>
                        <Nav.Link href="/services" className={`nav-link ${window.location.pathname === "/services" ? "active" : ""}`}>
                            Services
                        </Nav.Link>
                        <Nav.Link href="/aboutus" className={`nav-link ${window.location.pathname === "/aboutus" ? "active" : ""}`}>
                            About Us
                        </Nav.Link>
                        <Nav.Link href="/contactus" className={`nav-link ${window.location.pathname === "/contactus" ? "active" : ""}`}>
                            Contact Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};






// Exporting the NavBar component to be used in other parts of the application
export default NavBar;


