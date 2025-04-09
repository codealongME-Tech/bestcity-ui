"use client";
import React, { useState } from 'react';
import PricingCoverImage from './PricingImages/PricingCoverImage.png';
import './Pricing.css';
import { CheckIcon } from 'lucide-react';
import Image from 'next/image';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  return (
    <div className="pricing-container">
      {/* Hero section with cover image */}
      <div className="hero-section">
        <div className="hero-image-container">
          <Image
            src={PricingCoverImage}
            alt="Resourcing services"
            className="hero-image"
            priority // Optional - adds priority loading
          />

        </div>

        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-text-container">
            <div className="hero-text">
              <h1 className="hero-heading">
                <p>Straightforward<br />
                  Pricing with Proven ROI</p>
              </h1>
              <div className="feature-item-hero">
                <span className="tick-icon-round">
                  <CheckIcon fontSize="small" />
                </span>
                <p className="hero-paragraph">
                  You own the BestCity Point - no complex leasing
                </p>
              </div>
              <div className="feature-item-hero">
                <span className="tick-icon-round">
                  <CheckIcon fontSize="small" />
                </span>
                <p className="hero-paragraph">
                  Per-camera video license fee with option to pick from
                  <span>1, 3, 5, or 10 year license duration</span>
                </p>
              </div>
              <div className="feature-item-hero">
                <span className="tick-icon-round">
                  <CheckIcon fontSize="small" />
                </span>
                <p className="hero-paragraph">
                  Includes 24 x 7 online support
                </p>
              </div>
              <div className="feature-item-hero">
                <span className="tick-icon-round">
                  <CheckIcon fontSize="small" />
                </span>
                <p className="hero-paragraph">
                  See the ROI within a week of deployment
                </p>
              </div>
              <div className="connect-container">
                <button
                  className="connect-button"
                >
                  Check Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing section */}
      <div id="pricing-plans" className="pricing-section">
        <div className="pricing-wrapper">
          {/* Section header */}
          <div className="pricing-header">
            <h2 className="pricing-title">Our Pricing Plans</h2>
            <p className="pricing-description">
              We offer flexible options to meet your needs. All plans include 24/7 support and a 30-day money-back guarantee.
            </p>

            {/* Toggle between monthly/annual billing */}
            <div className="pricing-toggle">
              <span className={`toggle-label ${selectedPlan === 'monthly' ? 'toggle-active' : ''}`}>
                Monthly
              </span>
              <button
                className="toggle-button"
                onClick={() => setSelectedPlan(selectedPlan === 'monthly' ? 'annual' : 'monthly')}
              >
                <span
                  className={`toggle-slider ${selectedPlan === 'annual' ? 'toggle-slider-right' : ''}`}
                />
              </button>
              <span className={`toggle-label ${selectedPlan === 'annual' ? 'toggle-active' : ''}`}>
                Annual <span className="toggle-discount">Save 20%</span>
              </span>
            </div>
          </div>
          
          {/* Pricing cards */}
          <div className="pricing-cards">
            {/* Basic plan */}
            <div className="pricing-card">
              <div className="card-header">
                <h3 className="card-title">Basic</h3>
                <p className="card-subtitle">Perfect for individuals</p>
                <div className="card-price">
                  <span className="price-amount">
                    ${selectedPlan === 'monthly' ? '19' : '15'}
                  </span>
                  <span className="price-period">
                    /{selectedPlan === 'monthly' ? 'month' : 'month, billed annually'}
                  </span>
                </div>
              </div>
              <div className="card-content">
                <ul className="feature-list">
                  <li className="feature-item">
                    <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>1 user</span>
                  </li>
                  <li className="feature-item">
                    <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>10 projects</span>
                  </li>
                  <li className="feature-item">
                    <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>5GB storage</span>
                  </li>
                </ul>
                <button className="card-button">
                  Get Started
                </button>
              </div>
            </div>

            {/* Pro plan (featured) */}
            <div className="pricing-card featured-card">
              <div className="featured-tag">
                Popular
              </div>
              <div className="card-header">
                <h3 className="card-title">Pro</h3>
                <p className="card-subtitle">Perfect for small teams</p>
                <div className="card-price">
                  <span className="price-amount">
                    ${selectedPlan === 'monthly' ? '49' : '39'}
                  </span>
                  <span className="price-period">
                    /{selectedPlan === 'monthly' ? 'month' : 'month, billed annually'}
                  </span>
                </div>
              </div>
              <div className="card-content">
                <ul className="feature-list">
                  <li className="feature-item">
                    <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>5 users</span>
                  </li>
                  <li className="feature-item">
                    <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>50 projects</span>
                  </li>
                  <li className="feature-item">
                    <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>50GB storage</span>
                  </li>
                  <li className="feature-item">
                    <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Priority support</span>
                  </li>
                </ul>
                <button className="card-button">
                  Get Started
                </button>
              </div>
            </div>

            {/* Enterprise plan */}
            <div className="pricing-card">
              <div className="card-header">
                <h3 className="card-title">Enterprise</h3>
                <p className="card-subtitle">Perfect for large organizations</p>
                <div className="card-price">
                  <span className="price-amount">
                    ${selectedPlan === 'monthly' ? '99' : '79'}
                  </span>
                  <span className="price-period">
                    /{selectedPlan === 'monthly' ? 'month' : 'month, billed annually'}
                  </span>
                </div>
              </div>
              <div className="card-content">
                <ul className="feature-list">
                  <li className="feature-item">
                    <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited users</span>
                  </li>
                  <li className="feature-item">
                    <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited projects</span>
                  </li>
                  <li className="feature-item">
                    <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>500GB storage</span>
                  </li>
                  <li className="feature-item">
                    <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24/7 phone support</span>
                  </li>
                  <li className="feature-item">
                    <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom integrations</span>
                  </li>
                </ul>
                <button className="card-button">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">Can I change my plan later?</h3>
              <p className="faq-answer">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Is there a free trial available?</h3>
              <p className="faq-answer">Yes, we offer a 14-day free trial for all plans. No credit card required.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What payment methods do you accept?</h3>
              <p className="faq-answer">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};