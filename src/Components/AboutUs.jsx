import React from "react";
import { Container, Row, Col, Breadcrumb, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavbarNav from "./NavbarNav";
import about from "../Photos/img-about.png";
import mission from "../Photos/back5.png";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPhone,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import {
  Whatsapp,
  TelephoneFill,
  EnvelopeAt,
  Facebook,
} from "react-bootstrap-icons";

const TITLE = "Trademark Developers : About Us";
const AboutUs = () => {
  return (
    <div className="home">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <NavbarNav />

      <div className="about">
        <Container>
          <Row className="justify-content-center">
            <Col md="10">
              <Row>
                <Col md="6">
                  <h3 style={{ marginTop: "30px" }}>
                    Help Grow Your Business Through a <span>Website</span>
                  </h3>
                  <p>
                    {" "}
                    The Number One Software and Website Developers in Kenya. We
                    are determined to Provide Quality products and servics our
                    esteemed Customers. All our products are distinct due to
                    their uniqueness and effectiveness
                  </p>
                  <div className="get-started">
                    <a href="/contact_us" className="btn btn-primary">
                      {" "}
                      Get Started
                    </a>
                  </div>
                </Col>
                <Col
                  md="6"
                  style={{
                    textAlign: "center",
                    paddingBottom: "5rem",
                    marginTop: "20px",
                  }}
                >
                  <img src={about} alt="" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="duties">
        <Container>
          <Row className="justify-content-center">
            <Col md="10">
              <Row>
                <Col md="6">
                  <h3>Our Mission</h3>
                  <p>
                    Our mission is to provide our clients with the utmost
                    satisfaction. By doing so, we treat every client's website
                    with care. We strive for a modern website layout and high
                    organic search engine rankings.
                  </p>
                </Col>
                <Col md="6">
                  <img src={mission} alt="" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact-page">
        <Container>
          <Row className="justify-content-center">
            <Col md="10" style={{ textAlign: "center" }}>
              <h3 style={{ textAlign: "center" }}>Have Some Question?</h3>
              <span>Contact Us Here</span>
              <Row
                className="justify-content-center"
                style={{ marginTop: "30px" }}
              >
                <Col md="6">
                  <Row>
                    <Col md="6" style={{ textAlign: "center" }}>
                      <div className="cont">
                        <h6>
                          <TelephoneFill style={{ float: "left" }} id="icon" />
                          079 008 4094
                        </h6>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="cont">
                        <h6>
                          <Whatsapp style={{ float: "left" }} id="icon" />
                          079 900 9560
                        </h6>
                      </div>
                    </Col>
                    <Col md="6" style={{ textAlign: "center" }}>
                      <div className="cont">
                        <h6>
                          <EnvelopeAt style={{ float: "left" }} id="icon" />
                          info@trademarkdev.co.ke
                        </h6>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="cont">
                        <h6>
                          <Facebook style={{ float: "left" }} id="icon" />
                          Trademark Dev
                        </h6>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
