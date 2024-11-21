import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = ()=>{
    return(
        <footer className='mt-5 py-3 bg-light text-center'>
            <div className='container'>
                <p>&copy; 2024 Moving Right Homes. All Rights Reserved.</p>
                <div className='social-icons'>
                    <a href='https://www.linkedin.com/in/aleksandar-mihaylov-2725252b6/' target='_blank' rel="noopener noreferrer" className="social-icon p-2">
                        <i className='fab fa-linkedin fa-2x'></i>
                    </a>
                    <a href='https://github.com/Alek1010' target='_blank' rel="noopener noreferrer" className="social-icon p-2">
                        <i className='fab fa-linkedin fa-2x'></i>
                    </a>
                </div>
                <p>
                    Aleksandar Mihaylov | University of Westminster | Computer Science and Engineering | 5COSC026W Advanced Client-Side Web Development
                </p>
            </div>
        </footer>
);
}

export default Footer;