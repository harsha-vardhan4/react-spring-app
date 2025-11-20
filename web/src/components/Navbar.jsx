import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  // Scroll lock effect for mobile drawer
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "auto";
  }, [drawerOpen]);

  // Navigate to a page and close drawer if open
  const handleLinkClick = (e, path) => {
    e.preventDefault(); // prevent default anchor behavior
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => navigate( "/")}>
          JobHunger LLC
        </div>

        <div className="navbar-links desktop-links">
          <a href="/about" onClick={(e) => handleLinkClick(e, "/about")}>About Us</a>
          <a href="/pricing" onClick={(e) => handleLinkClick(e, "/pricing")}>Pricing</a>
          {/* <a href="/tool" onClick={(e) => handleLinkClick(e, "/tool")}>Tool</a> */}
          {/* <a href="/blog" onClick={(e) => handleLinkClick(e, "/blog")}>Blog</a> */}
          <button className="btn-signup" onClick={() => handleLinkClick(null, "/signup")}>Sign Up</button>
          <button className="btn-login" onClick={() => handleLinkClick(null, "/login")}>Login</button>
        </div>

        <div className="mobile-menu-icon" onClick={toggleDrawer}>
          {drawerOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? "open" : ""}`}>
        <a href="/about" onClick={(e) => handleLinkClick(e, "/about")}>About Us</a>
        <a href="/pricing" onClick={(e) => handleLinkClick(e, "/pricing")}>Pricing</a>
        {/* <a href="/tool" onClick={(e) => handleLinkClick(e, "/tool")}>Tool</a> */}
        {/* <a href="/blog" onClick={(e) => handleLinkClick(e, "/blog")}>Blog</a> */}
        <button className="btn-signup" onClick={() => handleLinkClick(null, "/signup")}>Sign Up</button>
        <button className="btn-login" onClick={() => handleLinkClick(null, "/login")}>Login</button>
      </div>

      {/* Backdrop */}
      <div
        className={`drawer-backdrop ${drawerOpen ? "active" : ""}`}
        onClick={toggleDrawer}
      ></div>
    </>
  );
}

export default Navbar;
