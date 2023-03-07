import React from "react";
import { Helmet } from "react-helmet";
import NavbarNav from "../NavbarNav";
import mpesa from "../../Photos/mpesa.png";
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
import Footer from "../Footer";

const TITLE = "Trademark Developers : Services";
const MpesaIntergration = () => {
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
          <Breadcrumb.Item active>Mpesa Intergration</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <div className="responsive">
        <Container>
          <Row className="justify-content-center">
            <Col md="10">
              <Row>
                <Col md="6">
                  <h1 style={{ fontWeight: "normal" }}>M-Pesa Intergration</h1>
                  <p>
                    Enhance Your pament method through a secure and convinient
                    way. Mpesa integration is the synchronization of an
                    application, website or system with the Mpesa web API so as
                    to automate payments verification, disbursements and payment
                    records management.
                  </p>
                  <div className="get-started">
                    <a href="/contact_us" className="btn btn-primary">
                      {" "}
                      Learn More
                    </a>
                  </div>
                </Col>
                <Col md="6">
                  <img src={mpesa} alt="" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col md="10">
            <h1>
              <span> Why add</span> M-Pesa Imtergration{" "}
              <span style={{ fontWeight: "normal" }}>in My Website?</span>
            </h1>
            <ol>
              <li>Fast as it is conveyed through sms.</li>
              <li>
                Convenient as it can be sent and received from any location.
              </li>
              <li>Confidential as PIN is used.</li>
            </ol>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default MpesaIntergration;
