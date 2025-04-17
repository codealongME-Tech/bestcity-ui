"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Star, Cctv, Shield, Clock, BarChart3, ArrowLeft } from 'lucide-react';
import { useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

// Define constants outside component to avoid re-creation on each render
const SERVICES = [
  {
    title: 'Advanced Object & Threat Detection',
    description: 'AI-driven recognition technology accurately identifies individuals, vehicles, and unusual behaviors in real time. By analyzing video feeds with deep learning algorithms, the system detects potential threats, unauthorized access, or anomalies, ensuring a proactive approach to security and monitoring.',
    icon: <Cctv size={24} />,
    path: '/Modernarchitecture',
    image: '/HomeImages/AdvancedObject.png'
  },
  {
    title: 'Automated Alerts & Smart Responses',
    description: "Stay ahead of incidents with instant AI-triggered notifications, integrated with your security protocols. Whether it's detecting an unauthorized entry or an operational anomaly, the system immediately alerts the right personnel via mobile notifications, emails, or dashboard alerts.",
    icon: <Shield size={24} />,
    path: '/SecureEnvironment',
    image: '/HomeImages/AutomatedAlerts.jpeg'
  },
  {
    title: 'Heatmaps & Activity Analysis',
    description: "AI-powered heatmaps offer deep insights into movement patterns, helping businesses optimize layouts, improve security, and enhance operational efficiency. By analyzing high-traffic areas, organizations can make data-driven decisions on workforce distribution, customer behavior, and safety measures.",
    icon: <Clock size={24} />,
    path: '/Find',
    image: '/HomeImages/HeatmapsActivityAnalysis.jpeg'
  },
];

const TESTIMONIALS = [
  {
    quote: "Since integrating AI-powered surveillance into our security infrastructure, we have seen a dramatic improvement in threat detection and response time. The advanced object detection feature has minimized false alarms, allowing our team to focus on real security risks. With real-time alerts, we can respond instantly, ensuring a safer environment for our employees and assets.",
    author: "Ricardo Diaz",
    position: "Director of IT Dreisbach Enterprises",
    path: '/Modernarchitecture',
    image: '/HomeImages/Client0.png'
  },
  {
    quote: "The AI-driven heatmap analytics have completely transformed how we understand customer movement and employee workflow. By analyzing high-traffic zones and bottlenecks, we’ve optimized store layouts, improved staff deployment, and enhanced the overall shopping experience. This level of data-driven decision-making was previously unimaginable.",
    author: "Sarah Johnson",
    position: "Operations Manager, RetailHub",
    image: '/HomeImages/Client1.png'
  },
  {
    quote: "Managing multiple locations used to be a challenge, but with AI-powered video surveillance, we now have real-time access to all our facilities from a single dashboard. The cloud storage is secure and scalable, and the system’s intuitive interface makes it easy to retrieve footage and analyze incidents. This has given us complete control and confidence in our security operations.",
    author: "Suzen Chen",
    position: "Facility Manager, Global Logistics",
    image: "/HomeImages/Client1.png" // Fallback to an existing image
  },
];

const CLIENT_LOGOS = [
  { logo: "/HomeImages/Reliance_Communications_Logo.svg", alt: 'Reliance Communications', className: 'w-24 h-20 object-contain transition-all duration-300' },
  { logo: "/HomeImages/wipro_new_logo.svg", alt: 'Wipro', className: 'w-32 h-20 object-contain transition-all duration-300' },
  { logo: "/HomeImages/Nokia.svg", alt: 'Nokia', className: 'w-32 h-20 object-contain transition-all duration-300' },
  { logo: "/HomeImages/HFCL-Blue-Logo.png", alt: 'HFCL Blue', className: 'w-32 h-20 object-contain transition-all duration-300' },
  { logo: "/HomeImages/Steelman.png", alt: 'Steelman', className: 'w-32 h-20 object-contain transition-all duration-300' },
  { logo: "/HomeImages/Quess.svg", alt: 'Quess', className: 'w-32 h-20 object-contain transition-all duration-300' },
];

const HomePage = () => {
  const [isQueryFormOpen, setIsQueryFormOpen] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);
  const isMobile = useMediaQuery('(max-width:500px)');
  const totalSlides = TESTIMONIALS.length;
  const videoSource = "/videos/bestCityHomeCover.mp4";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setVideoLoaded(true);
      video.play().catch(error => {
        console.error('Video play failed:', error);
        setVideoError(true);
      });
    };

    const handleError = (e) => {
      console.error('Video error:', e);
      setVideoError(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false,
    variableWidth: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  const renderHeroSection = () => (
    <div className="min-h-screen grid">
      <div className="relative col-start-1 row-start-1">
        {/* Video or fallback image */}
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-screen object-cover"
            onError={() => setVideoError(true)}
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src="/HomeImages/bestCityHomeCoverImage.png"
            alt="AI Video Surveillance"
            fill
            className="object-cover"
            priority
          />
        )}

        {/* Text overlay with improved styling */}
        <div className="absolute inset-10 flex flex-col justify-center px-6">
          <div className="bg-opacity-40 p-6 rounded-lg max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Next-Gen AI Video Surveillance: <br /> <span className='text-[#5ED9BF]' > Smarter & Safer</span>
            </h1>
            <p className="text-xl text-white mb-8">
              Gain real-time insights with AI-driven video <br /> analytics—detect, analyse, and optimise.
            </p>
            <button
              onClick={() => setIsQueryFormOpen(true)}
              className="connect-button"
            >
              Check Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderClientLogos = () => (
    <div className="bg-black pt-0.5 pb-0.5">
      <div className="mx-auto mt-8 mb-6">
        <Slider {...sliderSettings} className="client-logo-slider">
          {CLIENT_LOGOS.map(({ logo, alt, className }, index) => (
            <div key={index} className="px-10 flex items-center justify-center">
              <Image
                src={logo}
                alt={alt}
                width={120}
                height={80}
                className={`${className} opacity-100 hover:opacity-100 filter brightness-0 invert`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );

  const renderFeaturesSection = () => (
    <div className="features-container">
      <div>
        <div className="features-label">FEATURES</div>
        <h1 className="features-heading">
          Visionary Surveillance: Future of AI-Powered Video Intelligence
        </h1>
      </div>

      <div className="features-content">
        <div className="features-text">
          <p className="features-description">
            Harness the power of AI-driven video surveillance to detect, analyze, and optimize in real time. From security to operations, our intelligent system delivers actionable insights that keep you one step ahead.
          </p>

          <div className="nav-buttons">
            <button className="nav-button" aria-label="Previous slide">
              <ArrowLeft size={24} color="#5ED9BF" />
            </button>
            <button className="nav-button" aria-label="Next slide">
              <ArrowRight size={24} color="#5ED9BF" />
            </button>
          </div>
        </div>

        <div className="features-images">
          <div className="images-grid">
            {[
              { src: "/HomeImages/HomePageCamera.jpeg", alt: "Security camera" },
              { src: "/HomeImages/HomePageCamera2.png", alt: "Person detection system" },
              { src: "/HomeImages/HomePageCamera3.png", alt: "Vehicle detection system" }
            ].map((image, index) => (
              <div key={index} className="image-container">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="feature-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderServicesSection = () => (
    <div className="services-section">
      {SERVICES.map((service, index) => (
        <div key={service.title} className="service-card">
          <div className={`service-card-container ${index % 2 === 1 ? 'service-card-container-reverse' : ''}`}>
            <div className="service-image-wrapper">
              <div className="service-image-container">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="service-image"
                />
              </div>
            </div>
            <div className="service-content">
              <div className="service-icon-container">
                <div className="service-icon">{service.icon}</div>
                <h2 className="service-title">{service.title}</h2>
              </div>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTestimonialSection = () => (
    <div className="testimonials-section">
      <div className="testimonials-header">
        <span className="testimonials-label">TESTIMONIALS</span>
        <h2 className="testimonials-heading">Hear From Our Customers</h2>
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-quote-icon">"</div>

            <div className="testimonial-content">
              <p className="testimonial-text">{testimonial.quote}</p>
            </div>

            <div className="testimonial-author">
              <div className="testimonial-author-image">
                <Image
                  src={testimonial.image || "/HomeImages/Client0.png"}
                  alt={`${testimonial.author} photo`}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/HomeImages/Client0.png";
                  }}
                />
              </div>
              <div>
                <h4 className="testimonial-author-name">{testimonial.author}</h4>
                <p className="testimonial-author-position">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="fullscreen-container min-h-screen bg-[#FAFBFF]">
      {renderHeroSection()}
      {renderClientLogos()}
      {renderFeaturesSection()}
      {renderServicesSection()}
      {renderTestimonialSection()}
    </div>
  );
};

export default HomePage;