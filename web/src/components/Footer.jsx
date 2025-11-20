import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="jh-footer">

      <div className="jh-footer-main">

        {/* Column: Logo & tagline */}
        <div className="jh-col">
          <h2 className="jh-logo">JobHunger</h2>
          <p className="jh-tagline">
            Connecting talent with opportunity across the United States.
          </p>
        </div>

        {/* Column: Explore */}
        <div className="jh-col">
          <h3>Explore</h3>
          <a href="/about">About Us</a>
          <a href="/pricing">Pricing</a>
          <a href="/tool">Tools</a>
          <a href="/blog">Blog</a>
        </div>

        {/* Column: Support */}
        <div className="jh-col">
          <h3>Support</h3>
          <a href="/help">Help Center</a>
          <a href="/#contact">Contact</a>
          <a href="/login">Log In</a>
          <a href="/signup">Sign Up</a>
        </div>

        {/* Column: Business */}
        <div className="jh-col">
          <h3>For Business</h3>
          <a href="/business">JobHunger for Business</a>
          <a href="/plans">Plans & Pricing</a>
          <a href="/employer-login">Employer Login</a>
        </div>

      </div>

      {/* Bottom row */}
      <div className="jh-footer-bottom">
        <p>© {new Date().getFullYear()} JobHunger LLC — All Rights Reserved.</p>

        <div className="jh-bottom-links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/cookies">Cookies</a>
          <a href="/status">System Status</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
