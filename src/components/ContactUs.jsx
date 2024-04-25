import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ContactUs() {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [yesNo, setYesNo] = useState('');

  const handleTermsChange = () => {
    setAcceptTerms(!acceptTerms);
  };

  const handleRadioChange = (e) => {
    setYesNo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Contact Us</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Describe your query or message"
              />
            </Form.Group>

            <Form.Group controlId="acceptTerms">
              <Form.Check
                type="checkbox"
                label="I accept the terms and conditions"
                checked={acceptTerms}
                onChange={handleTermsChange}
              />
              {acceptTerms && <p style={{ color: 'green' }}>Thank you for accepting the terms!</p>}
            </Form.Group>

            <Form.Group>
              <Form.Label>Would you like to receive updates?</Form.Label>
              <Form.Check
                type="radio"
                id="yes"
                name="yesNo"
                value="yes"
                label="Yes"
                checked={yesNo === 'yes'}
                onChange={handleRadioChange}
              />
              <Form.Check
                type="radio"
                id="no"
                name="yesNo"
                value="no"
                label="No"
                checked={yesNo === 'no'}
                onChange={handleRadioChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;