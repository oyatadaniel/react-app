import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import AdminHome from "./Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about_us" element={<AboutUs />} />
      <Route path="/admin/home" element={<AdminHome />} />
    </Routes>
  );
}

export default App;
