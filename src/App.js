import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import AdminHome from "./Admin";
import WebDesign from "./Components/Services/WebDesign";
import MpesaIntergration from "./Components/Services/MpesaIntergration";
import LogoDesign from "./Components/Services/LogoDesign";
import InvendoryManagementSystem from "./Components/Services/InvendoryManagementSystem";
import ContactUs from "./Components/Services/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about_us" element={<AboutUs />} />
      <Route path="/services/web_design" element={<WebDesign />} />
      <Route
        path="/services/mpesa_intergration"
        element={<MpesaIntergration />}
      />
      <Route path="/services/logo_design" element={<LogoDesign />} />
      <Route
        path="/services/invendory_management_system"
        element={<InvendoryManagementSystem />}
      />
      <Route path="/admin/home" element={<AdminHome />} />
      <Route path="/contact_us" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
