import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#333', color: '#fff', textAlign: 'center', padding: '10px' }}>
      <p>&copy; {currentYear} My React App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
