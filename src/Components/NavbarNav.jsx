import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import logo from "../dev-logo.svg";
import { useFormik } from "formik";
import {
  Nav,
  Button,
  Modal,
  Form,
  FloatingLabel,
  Row,
  Col,
} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarNav = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "* Email is Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.name) {
      errors.name = "*  Name is Required";
    }
    if (!values.message) {
      errors.message = "*  Message is Required";
    }

    if (!values.phone) {
      errors.phone = "*  Phone is Required";
    } else if (
      !/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/i.test(
        values.phone
      )
    ) {
      errors.phone = "Invalid Phone Number";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
      phone: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Navbar expand="lg" className="navbar fixed-top">
        <Container class>
          <Navbar.Brand
            href="/"
            style={{ fontSize: "15px", fontWeight: "bold", color: "#fff" }}
          >
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-control="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/" className="myactive">
                Home
              </Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Web Design
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  Mpesa Intergration
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  Information System Development
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  Logo Design & Graphics
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about_us">About</Nav.Link>
              <Nav.Link onClick={handleShow}>Request Service</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Trademark Developers | Request For Service </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            <Form.Group id="form-space">
              <FloatingLabel controlId="floatingInput" label="Full Name">
                <Form.Control
                  id="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  name="name"
                  type="text"
                  placeholder="John Doe"
                />
              </FloatingLabel>
              {formik.touched.name && formik.errors.name && (
                <span
                  style={{
                    marginTop: "0px",
                    color: "red",
                    fontSize: "14px",
                  }}
                >
                  {formik.errors.name}
                </span>
              )}
            </Form.Group>
            <Row>
              <Col md="5">
                <Form.Group id="form-space">
                  <FloatingLabel controlId="floatingInput" label="Phone Number">
                    <Form.Control
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                      name="phone"
                      type="text"
                      controlId="floatingInput"
                      label="Phone Number"
                      placeholder="0712345678"
                    />
                  </FloatingLabel>
                  {formik.touched.phone && formik.errors.phone && (
                    <span
                      style={{
                        marginTop: "0px",
                        color: "red",
                        fontSize: "14px",
                      }}
                    >
                      {formik.errors.phone}
                    </span>
                  )}
                </Form.Group>
              </Col>
              <Col md="7">
                <Form.Group id="form-space">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email Address"
                  >
                    <Form.Control
                      id="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      type="email"
                      name="email"
                      placeholder="you@domain.com"
                    />
                  </FloatingLabel>
                  {formik.touched.email && formik.errors.email && (
                    <span
                      style={{
                        marginTop: "0px",
                        color: "red",
                        fontSize: "14px",
                      }}
                    >
                      {formik.errors.email}
                    </span>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Form.Group id="form-space">
              <FloatingLabel controlId="floatingTextarea2" label="Your Request">
                <Form.Control
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  name="message"
                  type="text"
                  as="textarea"
                  placeholder="Your Message"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              {formik.touched.message && formik.errors.message && (
                <span
                  style={{
                    marginTop: "0px",
                    color: "red",
                    fontSize: "14px",
                  }}
                >
                  {formik.errors.message}
                </span>
              )}
            </Form.Group>
            <div className="send">
              <Button type="submit" id="send" variant="secondary">
                Send Request
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavbarNav;
