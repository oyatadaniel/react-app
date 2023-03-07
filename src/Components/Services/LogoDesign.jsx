import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Helmet } from "react-helmet";
import NavbarNav from "../NavbarNav";
import responsive from "../../Photos/responsive.png";
import Footer from "../Footer";

const TITLE = "Trademark Developers : Services";
const LogoDesign = () => {
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
          <Breadcrumb.Item active>Logo Design</Breadcrumb.Item>
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
                      Logo
                    </span> Design{" "}
                  </h1>
                  <p>
                    Would you like ho have a beautiful and professional logo for
                    your Business, Organization or a Company? Its just by a
                    click and your logo will be delivered to you instantly.
                  </p>
                  <div className="get-started">
                    <a href="/contact_us" className="btn btn-primary">
                      {" "}
                      Get logo now
                    </a>
                  </div>
                </Col>
                <Col md="6">
                  <img style={{ marginTop: "20px" }} src={responsive} alt="" />
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
                <span style={{ fontWeight: "normal" }}>Why Have </span> Logo?
              </h1>
              <h4>1. It Grabs Attention</h4>
              <p>
                Attention spans are short these days – especially consumers’. As
                things stand, companies have about 2 seconds to convince
                potential customers that their products are worth any
                consideration. Enter: Your logo. A logo can quickly grab
                viewers’ attention and communicate a company’s core values in an
                interesting way. That short attention span – you know, the one
                that causes consumers to judge your business by its appearance –
                can work to your advantage, if you have a solid logo to speak
                for your company.
              </p>
              <h4>2. It Makes a Strong First Impression</h4>
              <p>
                A logo is a company’s first introduction to consumers. If
                designed well, it can pique the interest of the public and
                invite them to learn more about the company; if not, you’ve just
                alienated a potential customer base and basically tanked your
                business. (We’re kidding – sort of.) This first impression is
                your way to immediately communicate ownership over the
                product(s) you sell or niche you dominate. Do you offer women’s
                basketballs with an enhanced grip? Is your financial advice
                particularly helpful for solopreneurs? Your logo introduces your
                company as an authority in your professional space from the
                get-go.
              </p>
              <h4>3. It's the Foundation of Your Brand Identity</h4>
              <p>
                Successful branding is about telling a story that will influence
                customers’ emotions – plain and simple. And, while it’s true
                that logo design is only a part of a company’s brand, it serves
                as the foundation for the entire narrative on which the brand is
                built. Colors, tones, fonts – all of this is determined by the
                story you’re trying to tell, and your logo sets the stage for
                this story. These elements will later translate from your logo
                onto all of your branding materials – letterheads, business
                cards, landing pages, you name it – creating a concrete,
                marketable brand identity.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default LogoDesign;
