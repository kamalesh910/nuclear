// Header.js
import React from 'react';

const Header = () => {
  let Logo =
    'https://mitsubishielectric.in/assets_gws_template_responsive/img/logo.svg';
  const handleServiceClick = () => {
    // Handle the click on the "Services" link, e.g., toggle the dropdown
    alert('Dropdown will appear here');
  };

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
      }}
    >
      <div className="logo-container">
        <img src={Logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
      </div>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <a href="/">Home</a>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <a href="#" onClick={handleServiceClick}>
            Services
          </a>
          {/* Dropdown content */}
          <div
            style={{
              display: 'none',
              position: 'absolute',
              backgroundColor: '#f9f9f9',
              minWidth: '160px',
              boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
              zIndex: 1,
            }}
          >
            <a href="#">Product 1</a>
            <a href="#">Product 2</a>
            <a href="#">Product 3</a>
          </div>
        </div>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/contact">Contact Us</a>
        <a href="/career">Career</a>
      </nav>
    </header>
  );
};

export default Header;
