import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import NavbarNav from "../NavbarNav";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Breadcrumb,
  Container,
  Row,
  Col,
  Card,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import Footer from "../Footer";
import Contact from "../Contact";
import ContactForm from "./ContactForm";

const TITLE = "Trademark Developers : Contact us";

const ContactUs = () => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const { name, phone, email, message } = values;
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      errorMessage:
        "Name Cannot be Empty And Should Not Contain Special Character",
      label: "Full Name",
      required: true,
      pattern: "^[a-zA-Z'-]+ [a-zA-Z'-]+$",
    },
    {
      id: 2,
      name: "phone",
      type: "tel",
      errorMessage:
        "Phone Cannot be Empty And Should Contain Numbers not Exceeding 10",
      label: "Phone Number",
      required: true,
      pattern: "[0-9]{10}",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      errorMessage: "This is Not a Valid Email",
      label: "Email Address",
      required: true,
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3030/sendMessage", {
        name,
        phone,
        email,
        message,
      })
      .then(() => {
        setValues({ name: "", phone: "", email: "", message: "" });
      })
      .catch((err) => toast.error(err.response.data));
    toast.success(
      "Message Send Successifuly ,We will get back To you via Phone Number Provided Soon"
    );
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="home" style={{ marginTop: "120px" }}>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <NavbarNav />
      <Container>
        {" "}
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item>Services</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <div className="contact-page-page">
        <Container>
          <Row className="justify-content-center">
            <Col md="5">
              <h3
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                  marginTop: "90px",
                }}
              >
                Contac Us
              </h3>
              <Card>
                <Card.Body>
                  <form onSubmit={handleSubmit}>
                    {inputs.map((input) => (
                      <ContactForm
                        name={input.name}
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                      />
                    ))}

                    <div className="mb-3">
                      <FloatingLabel
                        controlId="floatingTextarea"
                        label="Your Message"
                      >
                        <Form.Control
                          as="textarea"
                          name="message"
                          placeholder="Leave a comment here"
                          required
                          onChange={onChange}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                        />
                      </FloatingLabel>
                      <span className="error"> Message Cannot Be Empty</span>
                    </div>
                    <div className="submit">
                      <button type="submit" className="btn btn-success">
                        Send Message
                      </button>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default ContactUs;
