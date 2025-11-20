import React, { useState } from "react";
import "../styles/Test.css";

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
      <div className="hero-left">
        <h1>
          START YOUR <br />
          <span className="highlight">CAREER</span> <br />
          IN TECH
        </h1>

        <p className="hero-subtext">
          Launch and boost your tech career fast with up to <b>43% off</b>
        </p>

        <ul className="hero-benefits">
          <li>Earn a tech salary without coding experience</li>
          <li>Land a job within a year or get your money back*</li>
          <li>Mentorship, Internship and 1:1 Career Coaching</li>
        </ul>
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
