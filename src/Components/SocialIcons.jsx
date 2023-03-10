import React from "react";
import whatsap from "../Photos/whatsap.svg";
import call from "../Photos/call.svg";
import facebook from "../Photos/facebook.svg";
import { Col, Container, Row } from "react-bootstrap";

const SocialIcons = () => {
  return (
    <div>
      <div className="project">
        <Container>
          <Row className="justify-content-center">
            <Col md="6" style={{ textAlign: "center" }}>
              <h1 id="h1" style={{ textAlign: "center" }}>
                <span style={{ fontWeight: "normal" }}>Have a</span> Project{" "}
                <span style={{ fontWeight: "normal" }}>at Hand?</span>
              </h1>
              <h4>Feel Free To Contact Us !</h4>
              <div
                className="contact-info"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={whatsap} alt="" style={{ width: "50px" }} />
                <img src={call} alt="" style={{ width: "50px" }} />
                <img src={facebook} alt="" style={{ width: "50px" }} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SocialIcons;
