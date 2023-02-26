import React from "react";
import "../Admin/style.css";
import Header from "../Components/Admin/Header";
import SideNav from "../Components/Admin/SideNav";
import Footer from "../Components/Admin/Footer";
import { Button, Card, Col, Row } from "react-bootstrap";

const AdminHome = () => {
  return (
    <div>
      <Header />
      <SideNav />
      <main id="main" className="main"></main>
      <Footer />
    </div>
  );
};

export default AdminHome;
