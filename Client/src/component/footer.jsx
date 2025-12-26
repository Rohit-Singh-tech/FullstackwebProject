import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <h2 className="footer-logo">📚 My Library</h2>
          <p className="footer-desc">
            Where knowledge meets convenience — explore unlimited books in one digital space.
          </p>
          <p className="footer-copy">
            © {new Date().getFullYear()} My Library. Crafted with ❤️ for book lovers.
          </p>
        </div>

        {/* Right Section */}
        <div className="footer-right">

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#books">Books</a></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#authors">Authors</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Follow Us</h4>
            <ul className="socials">
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#instagram">Instagram</a></li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
