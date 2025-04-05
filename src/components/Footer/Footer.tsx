import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Tagline */}
        <div className="footer-branding">
          <Link href="/" className="logo-link">
            <span className="company-name">
              BEST<span className="company-name-highlight">CITY</span>
            </span>
          </Link>
          <p className="tagline">
            We provide you unparalleled protection, real-time monitoring, and intelligent insights.
          </p>
        </div>

        {/* Company Links */}
        <div className="footer-links">
          <h3 className="footer-heading">Our Company</h3>
          <nav className="footer-nav">
            <Link href="/" className="footer-link">Home</Link>
            <Link href="/about" className="footer-link">Features</Link>
            <Link href="/careers" className="footer-link">Resources</Link>
            <Link href="/pricing" className="footer-link">Pricing</Link>
            <Link href="/blogs" className="footer-link">Blogs</Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3 className="footer-heading">Get in Touch</h3>
          <div className="contact-item">
            <Mail className="contact-icon" />
            <span className="contact-text">info@bestcity.ai</span>
          </div>
          <div className="contact-item">
            <Phone className="contact-icon" />
            <span className="contact-text">+91 8299121476</span>
          </div>
        </div>
      </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.facebook.com" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.twitter.com" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-content">
          <p className="copyright">Copyright ©BESTCITY 2025 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;