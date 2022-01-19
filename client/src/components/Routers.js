import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Community from "../Pages/Community";
import GlobalStyles from "./GlobalStyles";
<<<<<<< HEAD
import Signup from "../pages/Signup";
import Writing from "../pages/Writing";
=======
import Signup from "../Pages/Signup";
>>>>>>> 742495e7ea74e9f300a52a1ac1fee27f81e7add0

const Routers = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Navbar />
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/community" element={<Community />} />
      <Route path="/writing" element={<Writing />} />
=======
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/community' element={<Community />} />
>>>>>>> 742495e7ea74e9f300a52a1ac1fee27f81e7add0
    </Routes>
  </BrowserRouter>
);

export default Routers;
