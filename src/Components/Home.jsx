import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import Footer from "../Components/Footer";
import NavbarNav from "../Components/NavbarNav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import web from "../Photos/web-design-icon.svg";
import system from "../Photos/system.svg";
import mpesa from "../Photos/mpesa.svg";
import whatsap from "../Photos/whatsap.svg";
import call from "../Photos/call.svg";
import facebook from "../Photos/facebook.svg";
import C1 from "../Photos/ci.jpg";
import ack from "../Photos/ack.jpg";
import tds from "../Photos/tds.jpg";
import ima from "../Photos/ima.jpg";
import C2 from "../Photos/pic.png";
import TestiMonials from "./TestiMonials";
import C3 from "../Photos/background1.jpg";
import WOW from "wowjs";
import "bulma/css/bulma.min.css";
import { Helmet } from "react-helmet";

const TITLE = "Trademark Developers : Home";

const Home = () => {
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
      <Container id="container">
        <Row>
          <Col md="6">
            <div className="wow bounceInLeft">
              <h1 style={{ textAlign: "left" }}>
                <span style={{ fontWeight: "normal" }}>Do You Need a</span>{" "}
                Modern Stunning{" "}
                <span style={{ fontWeight: "normal" }}>Website</span>???
              </h1>
              <p>
                You own a company, Organization, Busniness enterprice, Private
                or even Public School ??? You need a <strong>Website.</strong>
              </p>
              <p>
                Not just a website, a <strong>Responsive Wedsite</strong> with
                Modern Technologies for <strong>High Performance.</strong>
              </p>
              <div className="learn">
                <Link className="btn">
                  Learn More <FontAwesomeIcon id="icon" icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </Col>

          <Col md="6">
            <Link>
              <img
                style={{ marginTop: "20px" }}
                className="wow bounceInRight"
                src={C1}
                alt=""
              />
            </Link>
          </Col>
        </Row>
      </Container>

      <div className="services">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Link>
                <img
                  className="wow bounceInUp"
                  data-wow-duration="2s"
                  src={C2}
                  alt=""
                />
              </Link>
            </Col>
            <Col
              md="6"
              className="wow bounceInUp"
              data-wow-delay="0.2s"
              data-wow-duration="2s"
            >
              <h1>
                <span style={{ fontWeight: "normal" }}>Move Your</span> Business{" "}
                <span style={{ fontWeight: "normal" }}>To The Next</span> Level.
              </h1>
              <p>
                {" "}
                Get to reach more Customers Based on Products Or Services you
                Offer by Advertising them through your Website.
                <div className="learn">
                  <Link className="btn">
                    Learn More <FontAwesomeIcon id="icon" icon={faArrowRight} />
                  </Link>
                </div>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="duties">
        <Container>
          <h1 id="h1" style={{ textAlign: "center" }}>
            What We Do
          </h1>
          <Row>
            <Col md="4">
              <Card.Body className="wow bounceInUp" data-wow-duration="2s">
                <div className="image-icon">
                  <img src={web} alt="" style={{ width: "40%" }} />
                </div>
                <h3>Web Design</h3>
                For Website Design and Development You need Us so that to
                achieve a responsive and efficiency Website.
                <div className="learn">
                  <Link className="btn">
                    Learn More <FontAwesomeIcon id="icon" icon={faArrowRight} />
                  </Link>
                </div>
              </Card.Body>
            </Col>
            <Col md="4">
              <Card.Body
                className="wow bounceInUp"
                data-wow-delay="0.4s"
                data-wow-duration="2s"
              >
                <div className="image-icon">
                  <img src={system} alt="" style={{ width: "40%" }} />
                </div>
                <h3>Business Systems </h3>
                Even small Business need a Well Inventory System to Manage and
                Keep Track of your Stock, Sales and Orders from your Clients.
                <div className="learn">
                  <Link className="btn">
                    Learn More <FontAwesomeIcon id="icon" icon={faArrowRight} />
                  </Link>
                </div>
              </Card.Body>
            </Col>
            <Col md="4">
              <Card.Body
                className="wow bounceInUp"
                data-wow-delay="0.6s"
                data-wow-duration="2s"
              >
                <div className="image-icon">
                  <img src={mpesa} alt="" style={{ width: "40%" }} />
                </div>
                <h3>M-Pesa Intergration</h3>
                Engance payments from Client and Suppliers by Intergrating Mpesa
                as a payment method into your Website
                <div className="learn">
                  <Link className="btn">
                    Learn More <FontAwesomeIcon id="icon" icon={faArrowRight} />
                  </Link>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="choose">
        <Container>
          <Row>
            <Col md="6" className="wow bounceInLeft" data-wow-duration="2s">
              <Card.Body className="link-card">
                <h1 id="h1">
                  <span style={{ fontWeight: "normal" }}>Why Just</span> Us?
                </h1>
                <Link>
                  {" "}
                  <h6>
                    <FontAwesomeIcon id="icon" icon={faArrowRight} /> Timely
                    Project Completion.
                  </h6>
                </Link>
                <Link>
                  <h6>
                    <FontAwesomeIcon id="icon" icon={faArrowRight} /> Free
                    Hosting for One year.
                  </h6>
                </Link>
                <Link>
                  <h6>
                    <FontAwesomeIcon id="icon" icon={faArrowRight} /> Expertise.
                  </h6>
                </Link>
                <Link>
                  <h6>
                    <FontAwesomeIcon id="icon" icon={faArrowRight} /> Website
                    Maintanance.
                  </h6>
                </Link>
                <Link>
                  <h6>
                    <FontAwesomeIcon id="icon" icon={faArrowRight} /> Free
                    Domain Name.
                  </h6>
                </Link>
              </Card.Body>
            </Col>
            <Col md="6">
              <img
                className="wow bounceInRight"
                data-wow-delay="0.2s"
                data-wow-duration="2s"
                src={C3}
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="clients">
        <Container>
          <h1 id="h1" style={{ textAlign: "center" }}>
            Our Work
          </h1>
          <Row>
            <Col md="3">
              <img src={ack} alt="" />
            </Col>
            <Col md="3">
              <img src={tds} alt="" />
            </Col>
            <Col md="3">
              <img src={ima} alt="" />
            </Col>
            <Col md="3">
              <img src={ack} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact">
        <Container>
          <Row className="justify-content-center">
            <Col md="12">
              <TestiMonials />
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="project"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
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
      <Footer />
    </div>
  );
};

export default Home;
