import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import NavbarNav from "./NavbarNav";
import about from "../Photos/img-about.png";
import mission from "../Photos/back5.png";
import { Helmet } from "react-helmet";
import WOW from "wowjs";

import Contact from "./Contact";

const TITLE = "Trademark Developers : About Us";
const AboutUs = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
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
                  <h3 style={{ marginTop: "30px", fontWeight: "700" }}>
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
                  <img className="wow bounceInRight" src={about} alt="" />
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
                <Col md="6" className="wow bounceInLeft">
                  <h3 style={{ fontWeight: "800" }}>Our Mission</h3>
                  <p>
                    Our mission is to provide our clients with the utmost
                    satisfaction. By doing so, we treat every client's website
                    with care. We strive for a modern website layout and high
                    organic search engine rankings.
                  </p>
                </Col>
                <Col md="6">
                  <img className="wow bounceInRight" src={mission} alt="" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutUs;
