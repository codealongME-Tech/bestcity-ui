"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import MainHome from './sr_consulting.jpg'
import './Nav.css';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { title: 'Manpower Recruitment', path: '/manPower' },
    { title: 'Cab Rentals', path: '/cabRental' },
    { title: 'Housekeeping', path: '/houseKeeping' },
    { title: 'Security', path: '/security' },
    { title: 'Other services', path: '/others' },
  ];

  return (
    <nav className={`navbar-appbar ${isScrolled ? 'navbar-shadow-bottom' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}

          <Link href="/" className="navbar-logo">
            <span className="navbar-logo-text">
              BEST
              <span className="!bg-gradient-to-r from-[#c78ef9] to-[#8781ef] !bg-clip-text !text-transparent">
                CITY
              </span>
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="navbar-desktop-menu">
            {['Home'].map((item) => (
              <Link
                key={item}
                href={`/`}
                className="navbar-link"
              >
                {item}
              </Link>
            ))}
            {['Features', 'Resources', 'Pricing', 'Blogs'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="navbar-link"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Auth buttons */}
          <div className="navbar-auth-buttons">
            <Link href="/try-free" className="navbar-try-free-button">
              Early Beta Access
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="navbar-mobile-toggle"
          >
            {isMobileMenuOpen ? (
              <X className="navbar-menu-icon" />
            ) : (
              <Menu className="navbar-menu-icon" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="navbar-mobile-menu">
            <div className="navbar-mobile-menu-content">
              {['HOME', 'ABOUT'].map((item) => (
                <Link
                  key={item}
                  href={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                  className="navbar-mobile-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}

              {/* Mobile Services Dropdown */}
              <div className="navbar-mobile-dropdown">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'mobile-services' ? '' : 'mobile-services')}
                  className="navbar-mobile-dropdown-toggle"
                >
                  <span>SERVICES</span>
                  <div className="navbar-icon-container">
                    {activeDropdown === 'mobile-services' ? (
                      <ChevronUp className="navbar-icon" />
                    ) : (
                      <ChevronDown className="navbar-icon" />
                    )}
                  </div>
                </button>

                {activeDropdown === 'mobile-services' && (
                  <div className="navbar-mobile-submenu">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        className="navbar-mobile-submenu-item"
                        onClick={() => {
                          setActiveDropdown('');
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {['CAREERS', 'ContactUs'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="navbar-mobile-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="navbar-mobile-auth-buttons">
                <Link
                  href="/login"
                  className="navbar-mobile-login-button"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/try-free"
                  className="navbar-mobile-try-free-button"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Early Beta Access
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;