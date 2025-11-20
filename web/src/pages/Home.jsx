import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { FaUserFriends, FaStar, FaBriefcase } from "react-icons/fa";

// Import images
import image1 from "../assets/images.jpeg";
import image2 from "../assets/images2.jpg";
import introImage from "../assets/images3.jpg";
import Test from "./Test";

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
      }, 500); // match CSS transition
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Scroll animation for .hiw-step cards — animate every time they enter viewport
  useEffect(() => {
    const steps = document.querySelectorAll(".hiw-step");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    steps.forEach((step) => observer.observe(step));

    return () => {
      steps.forEach((step) => observer.unobserve(step));
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // allow page to finish rendering
    }
  }, []);

  return (
    <div className="home-page-wrapper">
      {/* <main className="home-hero-container">
        <div
          className={`hero-bg ${fade ? "fade-in" : "fade-out"}`}
          // style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
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
      </main> */}
      <Test />

      <section className="how-it-works">
        <h2 className="hiw-title">The Smarter Way to Land a Job</h2>
        <p className="hiw-subtitle">
          Recruiters instantly see through & reject sloppy AI auto-filled
          applications. We apply to jobs with{" "}
          <span className="real-humans">REAL HUMANS</span>, no AI Apply
          nonsense.
        </p>

        <div className="hiw-steps">
          {[
            {
              title: "1. Tell us about yourself",
              description:
                "Share your profile, requirements, and career goals on an onboarding call.",
            },
            {
              title: "2. Select your dream jobs",
              description:
                "Handpick & delegate your favorite jobs in a single click.",
            },
            {
              title: "3. We apply for you",
              description:
                "Relax as your dedicated job assistant applies to them in 12–24 hours guaranteed.",
            },
          ].map(({ title, description }, index) => (
            <div key={index} className="hiw-step">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="intro-section">
        <div
          className="intro-image"
          style={{ backgroundImage: `url(${introImage})` }}
        ></div>

        <div className="intro-content">
          <h1>Connecting Talent with Opportunity</h1>
          <p>
            At JobHunger, we're dedicated to bridging the gap between job seekers and
            employers across the United States. Our platform empowers individuals to
            discover their dream careers by offering cutting-edge tools and
            personalized support. Whether you're looking to hire top talent or seeking
            your next professional challenge, JobHunger is your trusted partner in
            navigating the ever-evolving job market. Join us as we transform the way
            people find fulfilling work and companies build exceptional teams.
          </p>
        </div>
      </section>
      <section className="contact-section" id="contact">
        <div className="contact-left">
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" />
              </div>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="5"></textarea>
            </div>

            <button className="submit-btn">Submit</button>
          </form>
        </div>

        <div className="contact-right">
          <h2>Reach Out to JobHunger</h2>
          <p>
            Contact us for inquiries or support regarding our website features in the
            United Kingdom.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
