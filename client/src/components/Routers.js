import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Community from "../pages/Community";

const Routers = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/community" element={<Community />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
