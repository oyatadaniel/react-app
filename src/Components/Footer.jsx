import React from "react";
import { Container, Row, Col, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../dev-logo.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container>
          <Row>
            <Col md="3" className="footer-logo">
              <img src={logo} alt="" style={{ width: "170px" }} />
            </Col>
            <Col md="3">
              <div className="footer-heading">
                <span>SERVICES</span>
              </div>
              <div className="footer-link">
                <Link>Website Development</Link>
              </div>
              <div className="footer-link">
                <Link>M-Pesa Intergration</Link>
              </div>
              <div className="footer-link">
                <Link>Mobile App Development</Link>
              </div>
              <div className="footer-link">
                <Link>Business Enterprise Systems</Link>
              </div>
            </Col>
            <Col md="3">
              <div className="footer-heading">
                <span>QUICK LINKS</span>
              </div>
              <div className="footer-link">
                <Link>About Us</Link>
              </div>
              <div className="footer-link">
                <Link>Bulky SMS</Link>
              </div>
              <div className="footer-link">
                <Link>Payment Intergation</Link>
              </div>
              <div className="footer-link">
                <Link>Logo Design</Link>
              </div>
            </Col>
            <Col md="3">
              <div className="footer-heading">
                <span>SUBSCRIBE</span>
              </div>
              <FloatingLabel
                controlId="floatingInput"
                label="Email Address"
                className="mb-3"
              >
                <Form.Control type="number" placeholder="name@example.com" />
              </FloatingLabel>
              <input id="message" type="submit" value="Subscribe" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copyrite">
        <span>All Rights Reserved Trademark Developers</span>{" "}
        <span>&copy; Copyrite {new Date().getFullYear()}</span>
      </div>
    </>
  );
};

export default Footer;
