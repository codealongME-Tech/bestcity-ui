import React from 'react';
import MainHome from '../NavBar/sr_consulting.jpg';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import './Footer.css';
import Link from 'next/link';

const Footer = () => {
  const services = [
    { name: "Home", path: "/manPower" },
    { name: "Platform", path: "/cabRental" },
    { name: "Cameras", path: "/houseKeeping" },
    { name: "BestCity Point", path: "/security" },
    { name: 'Pricing', path: '/others' }
  ];

  const company = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/ContactUs" }
  ];

  return (
    <>
      {/* Desktop Footer */}
      <footer className="footer desktop-footer">
        {/* Top Section with Logo and Social Media */}
        <div className="top-section">
          {/* Logo Section */}
          <Link href="/" className="logo-link">
            {/* <img src={MainHome} alt="SR Resourcing" className="logo-image" /> */}
            <span className="company-name">
              BEST<span className="!bg-gradient-to-r from-[#aa60ea] to-[#4f46e5] !bg-clip-text !text-transparent">CITY</span>
            </span>
          </Link>

          {/* Social Media Section */}
          <div className="social-container">
            <span className="follow-text">Follow Us On</span>
            <div className="social-icons">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <Instagram className=" social-icon" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <Facebook className="social-icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <Twitter className="social-icon" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <Linkedin className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="service-container">
          <div className="content-container">
            {/* Main Footer Content */}
            <div className="footer-grid">
              {/* Company Info */}
              <div className="footer-column">
                <h3 className="section-title">Locate Us</h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <MapPin className="contact-icon" />
                    <span className="contact-text">Oxygen Park<br />
                      Greater Noida, 201310<br /> Uttar Pradesh</span>
                  </div>
                  <h3 className="section-title contact-title">Contact Us</h3>
                  <div className="contact-list">
                    <div className="contact-item">
                      <Phone className="contact-icon" />
                      <span className="contact-text">+91 8299121476</span>
                    </div>
                    <div className="contact-item">
                      <Phone className="contact-icon" />
                      <span className="contact-text">+91 9530985700</span>
                    </div>
                    <div className="contact-item">
                      <Mail className="contact-icon" />
                      <span className="contact-text">info@bestcity.ai</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="footer-column">
                <h3 className="section-title">Services</h3>
                <ul className="link-list">
                  {services.map((service, index) => (
                    <li className="list-item" key={index}>
                      <Link href={service.path} className="nav-link">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="footer-column">
                <h3 className="section-title">Company</h3>
                <ul className="link-list">
                  {company.map((item, index) => (
                    <li className="list-item" key={index}>
                      <Link href={item.path} className="nav-link">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Bottom Footer */}
        <div className="bottom-footer">
          <p className="copyright">
            &copy; 2025 BESTCITY. All rights reserved.
          </p>
          <div className="legal-links">
            <Link href="/privacy" className="legal-link">Privacy Policy</Link>
            <Link href="/terms" className="legal-link">Terms of Service</Link>
          </div>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="footer mobile-footer">
        {/* Top Section with Logo and Social Media */}
        <div className="mobile-top-section">
          {/* Social Media Section */}
          <div className="mobile-social-container">
            <span className="follow-text">Follow Us On</span>
            <div className="social-icons">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <Instagram className="social-icon" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <Facebook className="social-icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <Twitter className="social-icon" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <Linkedin className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="service-container">
          <div className="content-container">
            {/* Main Footer Content */}
            <div className="mobile-footer-grid">
              {/* Locate Us & Contact Us in a row */}
              <div className="mobile-info-row">
                {/* Locate Us */}
                <div className="mobile-info-column">
                  <h3 className="section-title">Locate Us</h3>
                  <div className="contact-item">
                    <MapPin className="contact-icon" />
                    <span className="contact-text">13/247 Indira nagar<br />
                      Lucknow, 226016<br /> Uttar Pradesh</span>
                  </div>
                </div>

                {/* Contact Us */}
                <div className="mobile-info-column">
                  <h3 className="section-title">Contact Us</h3>
                  <div className="contact-list">
                    <div className="contact-item">
                      <Phone className="contact-icon" />
                      <span className="contact-text">+91 9336011178</span>
                    </div>
                    <div className="contact-item">
                      <Phone className="contact-icon" />
                      <span className="contact-text">+91 9415119636</span>
                    </div>
                    <div className="contact-item">
                      <Mail className="contact-icon" />
                      <span className="contact-text email-text">info@srresourcing.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services & Company (Side by side) */}
              <div className="mobile-links-row">
                {/* Services */}
                <div className="mobile-link-column">
                  <h3 className="section-title">Product</h3>
                  <ul className="mobile-link-list">
                    {services.map((service, index) => (
                      <li className="list-item" key={index}>
                        <Link href={service.path} className="nav-link">
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div className="mobile-link-column">
                  <h3 className="section-title">Industries</h3>
                  <ul className="mobile-link-list">
                    {company.map((item, index) => (
                      <li className="list-item" key={index}>
                        <Link href={item.path} className="nav-link">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Bottom Footer */}
        <div className="mobile-bottom-footer">
          <p className="copyright">
            &copy; 2025 BESTCITY. All rights reserved.
          </p>
          <div className="mobile-legal-links">
            <Link href="/privacy" className="legal-link">Privacy Policy</Link>
            <Link href="/terms" className="legal-link">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;