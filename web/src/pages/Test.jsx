import React, { useState } from "react";
import "../styles/Test.css";
import { FaUserFriends, FaStar, FaBriefcase } from "react-icons/fa";


function Test() {
  const [countryCode, setCountryCode] = useState("+1");

  const countryOptions = [
    { code: "+1", flag: "🇺🇸" },
    { code: "+44", flag: "🇬🇧" },
    { code: "+61", flag: "🇦🇺" },
    { code: "+91", flag: "🇮🇳" },
    { code: "+81", flag: "🇯🇵" },
    { code: "+49", flag: "🇩🇪" },
    { code: "+33", flag: "🇫🇷" },
    { code: "+39", flag: "🇮🇹" },
    { code: "+34", flag: "🇪🇸" },
    { code: "+971", flag: "🇦🇪" },
  ];

  return (
    <main className="hero-two-column">

      {/* LEFT SIDE */}
      <div className="hero-content">

  {/* Trust Badges */}
  <div className="trust-badges">
    <span>
      <FaUserFriends /> 1500+ Job Seekers Helped
    </span>
    <span>
      <FaStar /> 4.8 on Trustpilot
    </span>
    <span>
      <FaBriefcase /> 9/10 Land job in 90 days
    </span>
  </div>

  <h1>
    START YOUR <br />
    <span className="highlight">CAREER</span> <br />
    IN TECH
  </h1>

  <p className="subtext">
    Launch and boost your tech career fast with up to <b>43% off</b>.  
    We will help you land a tech job even with no experience.
  </p>

  <button className="explore-btn">Explore Platform →</button>

</div>

      {/* RIGHT SIDE */}
      <div className="hero-form-card small-form">
        <h3>Save up to 43% – Limited time offer</h3>

        <form className="hero-form">

          <input type="text" placeholder="Your name" />

          {/* Phone Field */}
          <div className="phone-wrapper">

            <select
              className="country-select"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              {countryOptions.map((item, index) => (
                <option key={index} value={item.code}>
                  {item.flag} {item.code}
                </option>
              ))}
            </select>

            <input
              className="phone-input"
              type="text"
              placeholder="Phone number"
            />

          </div>

          <input type="email" placeholder="E-mail" />

          <button className="form-submit-btn">Enroll Now</button>
        </form>
      </div>

    </main>
  );
}

export default Test;
