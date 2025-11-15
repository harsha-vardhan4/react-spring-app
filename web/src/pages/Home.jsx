import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { FaUserFriends, FaStar, FaBriefcase } from "react-icons/fa";

// Import images at the top
import image1 from "../assets/images.jpeg";
import image2 from "../assets/images2.jpg";
// import image3 from "../assets/images3.jpeg";

const heroImages = [image1, image2];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
        setFade(true); // fade in
      }, 500); // match CSS transition duration
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page-wrapper">
      <main className="home-hero-container">
        <div
          className={`hero-bg ${fade ? "fade-in" : "fade-out"}`}
          style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
        ></div>

        <div className="hero-content">
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
            Land Jobs Faster and Easier with{" "}
            <span className="highlight">Human Assistants</span>
          </h1>

          <p className="subtext">
            We will apply to jobs on your behalf with ATS Friendly{" "}
            <b>Custom Resumes</b> and <b>Cover Letters</b> in less than 24
            hours, so you can focus on Networking and Interview Prep.
          </p>

          <button className="explore-btn">Explore Platform →</button>
        </div>
      </main>

      <section className="how-it-works">
        <h2 className="hiw-title">The Smarter Way to Land a Job</h2>
        <p className="hiw-subtitle">
          Recruiters instantly see through & reject sloppy AI auto-filled
          applications. We apply to jobs with{" "}
          <span className="real-humans">REAL HUMANS</span>, no AI Apply
          nonsense.
        </p>

        <div className="hiw-steps">
          <div className="hiw-step step1">
            <h3>1. Tell us about yourself</h3>
            <p>
              Share your profile, requirements, and career goals on an
              onboarding call.
            </p>
          </div>

          <div className="hiw-step step2">
            <h3>2. Select your dream jobs</h3>
            <p>Handpick & delegate your favorite jobs in a single click.</p>
          </div>

          <div className="hiw-step step3">
            <h3>3. We apply for you</h3>
            <p>
              Relax as your dedicated job assistant applies to them in 12–24
              hours guaranteed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
