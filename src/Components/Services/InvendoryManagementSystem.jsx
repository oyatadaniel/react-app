import React from "react";
import { Helmet } from "react-helmet";
import NavbarNav from "../NavbarNav";
import { Col, Breadcrumb, Container, Row } from "react-bootstrap";
import invendory from "../../Photos/invendory.png";
import Footer from "../Footer";

const TITLE = "Trademark Developers : Services";
const InvendoryManagementSystem = () => {
  return (
    <div className="home" style={{ marginTop: "120px" }}>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <NavbarNav />
      <NavbarNav />
      <Container>
        {" "}
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item>Services</Breadcrumb.Item>
          <Breadcrumb.Item active>Invendory Management</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <div className="responsive">
        <Container>
          <Row className="justify-content-center">
            <Col md="10">
              <Row>
                <Col md="6">
                  <h1 style={{ fontWeight: "normal" }}>Invendory Management</h1>
                  <p>
                    Inventory management refers to the process of ordering,
                    storing, using, and selling a company's inventory. This
                    includes the management of raw materials, components, and
                    finished products, as well as warehousing and processing of
                    such items.
                  </p>
                  <div className="get-started">
                    <a href="/contact_us" className="btn btn-primary">
                      {" "}
                      Learn More
                    </a>
                  </div>
                </Col>
                <Col md="6">
                  <img src={invendory} alt="" />
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
              <span style={{ fontWeight: "normal" }}> Why own</span> Invendory
              Management System{" "}
              <span style={{ fontWeight: "normal" }}>in My Business</span>
            </h1>
            <h4>1. Track Your Activity</h4>
            <p>
              As a business owner, you ought to know about any movement in your
              stock. From product transfers to inventory losses such as testers,
              damaged goods or missing products, everything must be brought to
              your attention, so when the right time comes, you’ll be on top of
              things instead of being overwhelmed by irregularities. In addition
              to those, it’s extremely important to have detailed inventory
              management reports organized in one place.
            </p>
            <h4>2. Daily Counts</h4>
            <p>
              Managing your inventory is a daily inventory management task.
              Without keeping daily track of your inventory status, even the
              most advanced reports won’t help you. Daily counts are a major
              part of any organised retail business routine and these must be
              accurate to maintain stock visibility. For retailers that are keen
              to utilise technology, this can be streamlined with effective
              inventory control, meaning you do not physically have to count
              every item you have in storage, providing you are confident that
              inventory management reporting is accurate.
            </p>
            <h4>3. Manage Out-Of-Stock Products</h4>
            <p>
              With the help of your detailed reports, you will be able to know
              exactly which products are missing, and which are sold the most.
              So when you need to reorder – you’ll know exactly what to order
              and when. As well as helping you to avoid running out of stock, it
              means you can act quickly to remove out-of-stocks from ecommerce
              platforms so you do not sell products that are not available.
            </p>
            <h4>4. Clear Description</h4>
            <p>
              A major part of inventory management involves being organised, so
              you should keep clear and informative descriptions of your
              products: names, sizes, colours, wholesaler name etc. Without this
              detailed information, you won’t be able to fully understand your
              reports and see the total picture. Make sure everything is clearly
              labelled or marked, so you know what a product is at a quick
              glance. This is vital to speed up fulfilment processes, as well as
              making sure no mistakes are made when it comes to stock counts. If
              you’re unable to do this work yourself, it’s recommended to hire
              someone who will.
            </p>
            <h4>5. Organized Work Environment</h4>
            <p>
              A clean, spacious and neat work environment might save you a lot
              of time trying to search for products. Research also indicates
              that such a work environment may raise the effectiveness of you
              and your employees. If your storage or warehousing space isn’t
              already organised, it is worth investing time to improve inventory
              management. There are no flaws to that – only clean profit.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default InvendoryManagementSystem;
