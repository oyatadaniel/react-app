import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import logo from "../dev-logo.svg";
import { toast } from "react-toastify";
import axios from "axios";
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
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const initialState = {
  name: "",
  phone: "",
  email: "",
  message: "",
};
const NavbarNav = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [state, setState] = useState(initialState);

  const { name, phone, email, message } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      toast.error("Can not Submit Blank Field");
    } else {
      axios
        .post("http://localhost:3030/sendMessage", {
          name,
          phone,
          email,
          message,
        })
        .then(() => {
          setState({ name: "", phone: "", email: "", message: "" });
        })
        .catch((err) => toast.error(err.response.data));
      setShow(false);
      setState({ name: "", phone: "", email: "", message: "" });
      toast.success(
        "Message Send Successifuly ,We will get back To you via Phone Number Provided Soon"
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <Navbar expand="lg" className="navbar fixed-top">
        <Container>
          <Navbar.Brand
            href="/"
            style={{ fontSize: "15px", fontWeight: "bold", color: "#fff" }}
          >
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={NavLink} to="/" end activeclassname="active">
                Home
              </Nav.Link>
              <NavDropdown
                style={{ textDecoration: "none" }}
                to="/services"
                activeclassname="active"
                title="Services"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  as={NavLink}
                  to="/services/web_design"
                  activeclassname="active"
                >
                  Web Design
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/services/mpesa_intergration"
                  activeclassname="active"
                >
                  Mpesa Intergration
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/services/invendory_management_system"
                  activeclassname="active"
                >
                  Invendory System Development
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/services/logo_design"
                  activeclassname="active"
                >
                  Logo Design & Graphics
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/contact_us" activeclassname="active">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about_us" activeclassname="active">
                About
              </Nav.Link>
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
          <form onSubmit={handleSubmit}>
            <Form.Group id="form-space">
              <FloatingLabel controlId="floatingInput" label="Full Name">
                <Form.Control
                  id="name"
                  value={name}
                  onChange={handleInputChange}
                  name="name"
                  type="text"
                  placeholder="John Doe"
                />
              </FloatingLabel>
            </Form.Group>
            <Row>
              <Col md="5">
                <Form.Group id="form-space">
                  <FloatingLabel controlId="floatingInput" label="Phone Number">
                    <Form.Control
                      name="phone"
                      value={phone}
                      onChange={handleInputChange}
                      type="text"
                      controlId="floatingInput"
                      label="Phone Number"
                      placeholder="0712345678"
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col md="7">
                <Form.Group id="form-space">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email Address"
                  >
                    <Form.Control
                      value={email}
                      onChange={handleInputChange}
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@domain.com"
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group id="form-space">
              <FloatingLabel controlId="floatingTextarea2" label="Your Request">
                <Form.Control
                  name="message"
                  value={message}
                  onChange={handleInputChange}
                  type="text"
                  as="textarea"
                  placeholder="Your Message"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
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
