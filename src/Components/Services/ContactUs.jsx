import React from "react";
import { Helmet } from "react-helmet";
import NavbarNav from "../NavbarNav";
import mpesa from "../../Photos/mpesa.png";
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
import Footer from "../Footer";

const TITLE = "Trademark Developers : Contact us";
const ContactUs = () => {
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
      <div className="responsive">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
