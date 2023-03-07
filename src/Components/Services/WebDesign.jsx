import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import NavbarNav from "../NavbarNav";
import responsive from "../../Photos/responsive.png";
import Footer from "../Footer";

const TITLE = "Trademark Developers : Services";
const WebDesign = () => {
  return (
    <HelmetProvider>
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
            <Breadcrumb.Item active>Web Design</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        <div className="responsive">
          <Container>
            <Row className="justify-content-center">
              <Col md="10">
                <Row>
                  <Col md="6">
                    <h1>
                      {" "}
                      <span style={{ fontWeight: "normal" }}>
                        Responsive
                      </span>{" "}
                      Web Design{" "}
                      <span style={{ fontWeight: "normal" }}>Technic.</span>
                    </h1>
                    <p>
                      Responsive web design (RWD) is a web development approach
                      that creates dynamic changes to the appearance of a
                      website, depending on the screen size and orientation of
                      the device being used to view it.
                    </p>
                    <div className="get-started">
                      <a href="/contact_us" className="btn btn-primary">
                        {" "}
                        Learn More
                      </a>
                    </div>
                  </Col>
                  <Col md="6">
                    <img
                      style={{ marginTop: "20px" }}
                      src={responsive}
                      alt=""
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="importance-web-design">
          <Container>
            <Row className="justify-content-center">
              <Col md="10">
                <h1>
                  <span style={{ fontWeight: "normal" }}>Why Responsive</span>{" "}
                  Website
                </h1>
                <h4>1) More mobile traffic</h4>
                <p>
                  More than half of traffic to top websites in the world cames
                  from mobile devices. Therefore, it's increasingly important
                  for companies to have websites that render properly on smaller
                  screens so that users don't encounter distorted images or
                  experience a sub-optimal site layout. While some businesses
                  still choose to have a separate version of their website for
                  mobile users, responsive design is becoming the norm because
                  it offers greater versatility at lower development costs.
                </p>
                <h4>2) Faster pages</h4>
                <p>
                  Mobile users in particular have short attention spans. Studies
                  show that mobile visitors tend to abandon web pages that take
                  longer than three seconds to finish loading. If a site isn't
                  optimized for smartphones and tablets, it will also take more
                  time to navigate, which can frustrate customers to a point of
                  no return. Ensuring that your responsive website uses modern
                  performance techniques such as caching and responsive image
                  display will help improve your web page loading speed.
                </p>
                <h4>3) Improved offline browsing experience</h4>
                <p>
                  Now that many smartphones and tablets are HTML5 enabled,
                  responsive web design benefits users by making it easier to
                  continue viewing content within HTML5 web applications without
                  an internet connection. Learn more about HTML5 Application
                  Cache. Tips for realizing the benefit
                </p>
                <h1>
                  <span style={{ fontWeight: "normal" }}>
                    Future Benefit of
                  </span>{" "}
                  Responsive Web Design
                </h1>
                <p>
                  As the number of devices on the market continues to grow
                  exponentially, the study of responsive design will only become
                  more complex. While it's easy to assume that the benefits of
                  responsive web design have all been hammered out, we are
                  probably still in the field's infancy. People are now
                  accessing the web through virtual reality headsets, and
                  smartphones have enabled the creation of entirely new types of
                  applications such as augmented reality games, so there will be
                  no shortage of novel challenges going forward. Future concerns
                  for developers will include the reduction of maintenance
                  costs, ongoing search engine optimization and improved
                  conversion rates. Most recent advancements in responsive
                  design have focused on accommodating smaller screens and this
                  trend has no signs of slowing down. However, it's also
                  important to not forget users using larger displays so that
                  everyone has a similar user experience in the end.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default WebDesign;
