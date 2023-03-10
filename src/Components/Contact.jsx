import React from "react";
import {
  Whatsapp,
  TelephoneFill,
  EnvelopeAt,
  Facebook,
} from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="contact-page">
        <Container>
          <Row className="justify-content-center">
            <Col style={{ textAlign: "center" }}>
              <h3 style={{ textAlign: "center", fontWeight: "800" }}>
                Have Some Question?
              </h3>
              <span>Phone Numbers</span>
              <Row
                className="justify-content-center"
                style={{ marginTop: "30px" }}
              >
                <Col md="8">
                  <Row>
                    <Col md="6" style={{ textAlign: "center" }}>
                      <div className="cont">
                        <a href="tel:0799009560">
                          <TelephoneFill style={{ float: "left" }} id="icon" />
                          079 900 9560
                        </a>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="cont">
                        <a
                          href="https://wa.me/254790084094?text=Hi%20I'm%20interested%20in%20your%20Services%20"
                          target="blank"
                        >
                          {" "}
                          <Whatsapp style={{ float: "left" }} id="icon" />
                          079 008 4094
                        </a>
                      </div>
                    </Col>
                    <Col md="6" style={{ textAlign: "center" }}>
                      <div className="cont">
                        <a href="mailto:info@trademarkdev.co.ke?Subject=Hello%20Trademark%20Dev">
                          <EnvelopeAt style={{ float: "left" }} id="icon" />
                          info@tdev.co.ke
                        </a>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="cont">
                        <Link>
                          {" "}
                          <Facebook style={{ float: "left" }} id="icon" />
                          Trademark Dev
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
