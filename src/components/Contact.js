import React from 'react';
import './Contact.css'; // Import the CSS file
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <div className="contact-page">
      <Container>
        <Row className="contact-section">
          <Col md={6}>
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-description">
              We'd love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
            </p>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="primary" type="submit" className="submit-button">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h2 className="contact-info-title">Contact Information</h2>
            <div className="contact-info">
              <p><strong>Phone:</strong> +123 456 7890</p>
              <p><strong>Email:</strong> contact@company.com</p>
              <p><strong>Office Address:</strong> 123 Business Road, Suite 100, City, Country</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
