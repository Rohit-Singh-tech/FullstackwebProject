import React from "react";
import "./Home.css";

export default function HomePage() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Future Engineers</h1>
          <p>Advance your knowledge with world-class engineering resources.</p>
          <button className="explore-btn">Browse Library</button>
        </div>
      </section>

      {/* Top Engineers Collection */}
      <section className="image-section">
        <h2 className="section-title">Top Rated Engineering Books</h2>

        <div className="image-slider">
          <div className="book-card img1"></div>
          <div className="book-card img2"></div>
          <div className="book-card img3"></div>
          <div className="book-card img4"></div>
        </div>
      </section>

      {/* Unique Category Cards */}
      <section className="cards-section slant">
        <h2 className="section-title">Choose Your Domain</h2>

        <div className="cards-grid">
          <div className="card bg1">
            <span>Computer Engineering</span>
          </div>
          <div className="card bg2">
            <span>Mechanical</span>
          </div>
          <div className="card bg3">
            <span>Electronics</span>
          </div>
          <div className="card bg4">
            <span>Civil & Architecture</span>
          </div>
        </div>
      </section>

      {/* Feature Icons */}
      <section className="features">
        <h2 className="section-title">Our Premier Features</h2>

        <div className="features-grid">
          <div className="feature-box">
            <img src="https://cdn-icons-png.flaticon.com/512/2721/2721287.png" alt="" />
            <h3>10000+ E-Books</h3>
          </div>

          <div className="feature-box">
            <img src="https://cdn-icons-png.flaticon.com/512/942/942748.png" alt="" />
            <h3>Instant Access</h3>
          </div>

          <div className="feature-box">
            <img src="https://cdn-icons-png.flaticon.com/512/3208/3208750.png" alt="" />
            <h3>Trusted Authors</h3>
          </div>
        </div>
      </section>

      {/* Motto Banner */}
      <section className="banner">
        <h2>Engineering is not just a subject — it's a lifestyle ⚙️</h2>
      </section>

    </div>
  );
}
