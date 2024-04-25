import React from 'react';

function ContactUs() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Contact Us</h2>
      <form>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" style={{ marginLeft: '10px', width: '300px' }} rows={4} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
