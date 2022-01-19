import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Community from "../Pages/Community";
import GlobalStyles from "./GlobalStyles";
import Signup from "../Pages/Signup";
import Writing from "../Pages/Writing";

const Routers = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/community" element={<Community />} />
      <Route path="/writing" element={<Writing />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
