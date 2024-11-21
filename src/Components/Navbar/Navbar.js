// Importing React to build the Navbar component
import React from "react";
import './Navbar.css'

// Importing necessary components from react-bootstrap
// - Container: Used to align and center content within a responsive container
// - Nav: Used to define navigation links
// - Navbar: Used to create the navigation bar itself
import { Container, Nav, Navbar } from 'react-bootstrap';




// Defining the NavBar functional component
const NavBar = () => {
    return (
        // Navbar component from react-bootstrap:
        // - 'expand="lg"' makes the Navbar expand on large screens and collapsible on smaller screens
        // - 'className="custom-navbar"' allows adding custom CSS styling
        // - 'fixed="top"' keeps the Navbar fixed at the top of the page when scrolling
        <Navbar expand="lg" className="custom-navbar" fixed="top">
            {/* Container ensures the Navbar content stays responsive and aligned */}
            <Container>
                {/* Navbar.Brand defines the brand/logo area */}
                <Navbar.Brand href="#home">
                    <span className="logo-text">SHEVIN HOMES</span> {/* Custom text for the brand */}
                </Navbar.Brand>

                {/* Navbar.Toggle adds a button for collapsing/expanding the menu on smaller screens */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Navbar.Collapse wraps the collapsible menu links */}
                <Navbar.Collapse  id="basic-navbar-nav">
                    {/* Nav contains individual navigation links */}
                    <Nav className="ms-auto">
                        {/* Home link: Applies 'active' class when the current page is '/' */}
                        <Nav.Link
                            href="/"
                            className={`m-1 ${window.location.pathname === '/' ? 'active' : ''}`}
                        >
                            Home
                        </Nav.Link>

                        {/* Properties link: Applies 'active' class when the current page is '/properties' */}
                        <Nav.Link
                            href="/properties"
                            className={`m-1 ${window.location.pathname === '/properties' ? 'active' : ''}`}
                        >
                            Properties
                        </Nav.Link>

                        {/* Services link: Applies 'active' class when the current page is '/services' */}
                        <Nav.Link
                            href="/services"
                            className={`m-1 ${window.location.pathname === '/services' ? 'active' : ''}`}
                        >
                            Services
                        </Nav.Link>

                        {/* About Us link: Applies 'active' class when the current page is '/aboutus' */}
                        <Nav.Link
                            href="/aboutus"
                            className={`m-1 ${window.location.pathname === '/aboutus' ? 'active' : ''}`}
                        >
                            About Us
                        </Nav.Link>

                        {/* Contact Us link: Applies 'active' class when the current page is '/contactus' */}
                        <Nav.Link
                            href="/contactus"
                            className={`m-1 ${window.location.pathname === '/contactus' ? 'active' : ''}`}
                        >
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
