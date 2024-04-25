import React from 'react';

function About() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <img 
        src="C:\Users\Faizan Ahmed Solangi\Desktop\Profile.jpg" 
        alt="Profile" 
        style={{ 
          width: '150px', 
          height: '150px', 
          borderRadius: '50%', 
          marginBottom: '20px'
        }}
      />
      <h2>About Me</h2>
      <p>
        Hi, I'm Faizan Ahmed, a passionate developer. I love building amazing things with React.
      </p>
    </div>
  );
}

export default About;
