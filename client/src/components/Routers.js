import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Community from "../pages/Community";
import GlobalStyles from "./GlobalStyles";
import Join from "../pages/Join";

const Routers = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/join' element={<Join />} />
      <Route path='/community' element={<Community />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
