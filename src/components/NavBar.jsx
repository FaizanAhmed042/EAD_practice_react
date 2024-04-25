import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#333', color: '#fff' }}>
      <div>
        <img src="/path/to/logo.png" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
        My React App
      </div>
      <div>
        <Link to="/" style={{ margin: '0 10px', color: '#fff' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 10px', color: '#fff' }}>About</Link>
        <Link to="/products" style={{ margin: '0 10px', color: '#fff' }}>Products</Link>
        <Link to="/contact" style={{ margin: '0 10px', color: '#fff' }}>Contact Us</Link>
      </div>
    </nav>
  );
}

export default NavBar;
