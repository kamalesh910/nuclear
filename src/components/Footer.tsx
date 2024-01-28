// Footer.tsx

import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>
          <img
            src="https://mitsubishielectric.in/assets_gws_template_responsive/img/logo.svg"
            alt="Company Logo"
            style={{ width: '50px', height: 'auto' }}
          />
          <span
            style={{
              fontWeight: 'bold',
              fontSize: '1.2rem',
              marginLeft: '0.5rem',
            }}
          >
            Your Company
          </span>
        </div>
        <div style={contactStyle}>
          <p style={{ marginBottom: '0.5rem' }}>Contact Us</p>
          <p>Email: info@yourcompany.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div style={socialStyle}>
          <p style={{ marginBottom: '0.5rem' }}>Follow Us</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={socialLinkStyle}>
              Facebook
            </a>
            <a href="#" style={socialLinkStyle}>
              Twitter
            </a>
            <a href="#" style={socialLinkStyle}>
              LinkedIn
            </a>
            {/* Add more social media links as needed */}
          </div>
        </div>
      </div>
      <div style={copyrightStyle}>
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Styles
const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '2rem 0',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
};

const contactStyle = {
  flex: '1',
  marginLeft: '2rem',
};

const socialStyle = {
  flex: '1',
  marginLeft: '2rem',
};

const socialLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '0.9rem',
};

const copyrightStyle = {
  borderTop: '1px solid #555',
  marginTop: '1rem',
  padding: '1rem 0',
  textAlign: 'center',
};

export default Footer;
