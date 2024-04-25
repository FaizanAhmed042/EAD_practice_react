import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <Container style={{ padding: '20px' }}>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center"> 
            <Card.Body>
              <img
                src="C:/Users/Faizan Ahmed Solangi/Desktop/Profile.jpg"
                alt="Profile"
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',  
                  marginBottom: '20px',
                }}
              />
              <Card.Title>About Me</Card.Title>  
              <Card.Text>
                Hi, I'm Faizan Ahmed, a passionate developer. I love building amazing things with React.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
