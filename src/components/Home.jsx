import React from 'react';

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(/Bg.jpg)`,
        backgroundSize: 'cover',
        color: '#fff',
        padding: '100px 20px',
        textAlign: 'center',
      }}
    >
      <h1>Welcome to My React App</h1>
      <p>Explore our site to learn more.</p>
    </div>
  );
}

export default Home;