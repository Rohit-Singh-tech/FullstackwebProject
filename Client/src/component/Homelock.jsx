import React from "react";
import "./Home.css";

export default function HomePage1() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Future Engineers</h1>
          <p>Advance your knowledge with world-class engineering resources.</p>
          <p>Please sign in to access the full library.</p>
          <button className="explore-btn" onClick={() => window.location.href = '/component/Register'}>Sign In</button>
        </div>
      </section>

         </div>
  );
}