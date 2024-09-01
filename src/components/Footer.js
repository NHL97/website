import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
  return (
    <footer className="bg-dark ">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-left ">
          <Link to="/">
              <img src="/logo.png" width="65" height="65" alt="Company Logo" className="mx-auto mx-md-0" />
              </Link>
          </Col>

          <Col className="text-center">
            <p className="mb-0 text-white">© {new Date().getFullYear()} Liner. All rights reserved.</p>
          </Col>

          <Col md={4} className="text-center text-md-right">
            <a href="https://www.facebook.com" className="text-light mx-2" aria-label="Facebook"><FacebookIcon /></a>
            <a href="https://www.twitter.com" className="text-light mx-2" aria-label="Twitter"><XIcon /></a>
            <a href="https://www.instagram.com" className="text-light mx-2" aria-label="Instagram"><InstagramIcon /></a>
            <a href="https://www.linkedin.com" className="text-light mx-2" aria-label="LinkedIn"><LinkedInIcon /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
