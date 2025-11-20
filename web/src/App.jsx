import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Tool from "./pages/Tool";
import Blog from "./pages/Blog";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Always renders the navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/tool" element={<Tool />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
