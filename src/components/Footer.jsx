import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px' }}> 
      <Container>
        <Row>
          <Col className="text-center"> 
            <p>
              &copy; {currentYear} My React App. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
