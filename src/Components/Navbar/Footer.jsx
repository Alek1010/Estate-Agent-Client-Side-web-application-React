
import React from 'react'; // Importing React to define the Footer component.
import './Footer.css'; // Importing custom CSS styles for the Footer.
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        // The main footer element with Bootstrap and custom classes for styling
        <footer className="footer mt-5 py-4 bg-light text-center">
            <div className="container">
                {/* Copyright text */}
                {/* This section displays the copyright text at the top of the footer */}
                <p className="footer-text">
                    &copy; 2024 Moving Right Homes. All Rights Reserved.
                </p>
                
                {/* Social icons section */}
                {/* Flexbox used in CSS to center these icons horizontally */}
                <div className="social-icons my-3">
                    {/* LinkedIn icon */}
                    {/* 'target="_blank"' opens the link in a new tab. 'rel="noopener noreferrer"' adds security against phishing attacks */}
                    <a 
                        href="https://www.linkedin.com/in/aleksandar-mihaylov-2725252b6/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="LinkedIn Profile" // Accessibility feature for screen readers
                        className="social-icon"
                    >
                        {/* Font Awesome LinkedIn icon */}
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>

                    {/* GitHub icon */}
                    <a 
                        href="https://github.com/Alek1010" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="GitHub Profile" // Accessibility feature for screen readers
                        className="social-icon mx-3" // Adds margin around the icon
                    >
                        {/* Font Awesome GitHub icon */}
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </div>

                {/* Additional personal and academic information */}
                {/* This section is a paragraph displaying additional details like the author's name, university, and course */}
                <p className="footer-info">
                    Aleksandar Mihaylov | University of Westminster | Computer Science and Engineering | 
                    5COSC026W Advanced Client-Side Web Development
                </p>
            </div>
        </footer>
    );
};

// Exporting the Footer component to make it available for import in other files
export default Footer;
