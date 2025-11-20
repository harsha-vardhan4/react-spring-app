import React from 'react';
import { Users, Target, Award, Heart, Briefcase, TrendingUp } from 'lucide-react';
import "../styles/About.css";

export default function About() {
  const values = [
    {
      icon: <Heart className="value-icon" />,
      title: "Integrity",
      description: "We build trust through transparency and honest relationships with both clients and candidates."
    },
    {
      icon: <Target className="value-icon" />,
      title: "Excellence",
      description: "We strive for perfection in every placement, ensuring the right fit for every role."
    },
    {
      icon: <Users className="value-icon" />,
      title: "Partnership",
      description: "We work collaboratively with our clients to understand their unique needs and culture."
    },
    {
      icon: <TrendingUp className="value-icon" />,
      title: "Innovation",
      description: "We leverage cutting-edge technology and strategies to stay ahead in the recruitment industry."
    }
  ];

  const stats = [
    { number: "10K+", label: "Successful Placements" },
    { number: "500+", label: "Partner Companies" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years of Experience" }
  ];

  return (
    <div className="about-container">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">About Jobhunger</h1>
          <p className="hero-subtitle">Connecting Talent with Opportunity</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="content-wrapper">
          <div className="mission-content">
            <div className="mission-icon-wrapper">
              <Briefcase className="mission-icon" />
            </div>
            <h2>Our Mission</h2>
            <p>
              At Jobhunger, we're passionate about bridging the gap between exceptional talent and outstanding opportunities.
              As a leading recruiting and staffing company, we understand that finding the perfect match goes beyond matching skills—it's about culture and aspirations.
            </p>
            <p>
              With years of industry expertise and a vast network, we've helped thousands of candidates
              find their dream careers while empowering businesses to build strong teams.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="content-wrapper">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="content-wrapper">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon-wrapper">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-section">
        <div className="content-wrapper">
          <div className="why-content">
            <div className="why-icon-wrapper">
              <Award className="why-icon" />
            </div>
            <h2>Why Choose Jobhunger?</h2>

            <div className="why-list">
              <div className="why-item">
                <div className="why-bullet"></div>
                <div>
                  <h4>Industry Expertise</h4>
                  <p>Our specialized recruiters bring deep industry knowledge and proven hiring strategies.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-bullet"></div>
                <div>
                  <h4>Personalized Approach</h4>
                  <p>We take time to understand your unique needs, whether you're a candidate or employer.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-bullet"></div>
                <div>
                  <h4>Extensive Network</h4>
                  <p>Access a vast pool of qualified candidates and top-tier companies worldwide.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-bullet"></div>
                <div>
                  <h4>Proven Track Record</h4>
                  <p>Thousands of successful placements and long-term partnerships reflect our commitment.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="content-wrapper">
          <div className="cta-content">
            <h2>Ready to Find Your Perfect Match?</h2>
            <p>Your next hire or your next big career step is just one click away.</p>

            <div className="cta-buttons">
              <button className="cta-button primary">Get Started</button>
              <button className="cta-button secondary">Contact Us</button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
