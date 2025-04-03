"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Star, Cctv, Shield, Clock, BarChart3, ArrowLeft } from 'lucide-react';
import { useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';


const HomePage = () => {
  const [isQueryFormOpen, setIsQueryFormOpen] = useState(false);

  const services = [
    {
      title: 'Modern architecture',
      description: 'BestCity works seamlessly with any IP camera and offers a wide range of cameras to choose from—your one-stop shop for all your security needs. Whether you manage 10 cameras or thousands, BestCity scales effortlessly to meet your demands.',
      icon: <Cctv size={24} />,
      path: '/Modernarchitecture',
      image: '/HomeImages/Modern architecture.jpeg'
    },
    {
      title: 'Secure every environment',
      description: 'BestCity delivers instant alerts for what matters most, from slip-and-fall incidents to weapon detection and more — powered by the latest AI breakthroughs for any environment.',
      icon: <Shield size={24} />,
      path: '/SecureEnvironment',
      image: '/HomeImages/SecureEnvironment.jpeg'
    },
    {
      title: 'Find what matters in seconds',
      description: "With BestCity's natural language search, simply type your query to instantly find the footage you need. Download clips at your fingertips and easily share them over email or text",
      icon: <Clock size={24} />,
      path: '/Find',
      image: '/HomeImages/FindWhat.jpeg'
    },
    {
      title: 'Smarter operations, less waste',
      description: 'BestCity is your extra pair of eyes to optimize operations and reduce waste. Track productivity, identify inefficiencies, and drive smarter decisions.',
      icon: <BarChart3 size={24} />,
      path: '/SmarterOperations',
      image: '/HomeImages/SmarterOperations.jpeg'
    },
  ];

  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  
  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
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
    }
  }, []);

  const settings = {
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ],
    appendDots: (dots) => (
      <div style={{
        backgroundColor: 'transparent',
        borderRadius: '10px',
        padding: '30px 20px 0 20px',
        marginTop: '20px'
      }}>
        <ul style={{
          margin: '0px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {dots}
        </ul>
      </div>
    ),
    dotsClass: "slick-dots custom-dots"
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const testimonials = [
    {
      quote: "BestCity AI's software is designed with the user in mind, and they are always open to feedback and suggestions for improvement. Their commitment to customer satisfaction is reflected in their responsive customer support.",
      author: "Ricardo Diaz",
      position: "Director of IT Dreisbach Enterprises",
      path: '/Modernarchitecture',
      image: '/HomeImages/Client0.png'
    },
    {
      quote: "BestCity has transformed how we monitor our facilities. The AI detection capabilities have saved us countless hours and improved our security operations dramatically.",
      author: "Sarah Johnson",
      position: "Head of Security Operations, Steelman Industries",
      image: '/HomeImages/Client1.png'
    },
    {
      quote: "The natural language search feature is a game-changer. What used to take hours now takes seconds to find exactly the footage we need.",
      author: "Michael Chen",
      position: "VP of Operations, Quess Corp",
      image: "/images/logistics-facility.jpg"
    },
    {
      quote: "Implementation was seamless, and the team at BestCity provided exceptional support throughout the entire process. Their dedication to our success was evident at every step.",
      author: "Priya Sharma",
      position: "CTO, Reliance Communications",
      image: '/HomeImages/Client1.png'
    },
    {
      quote: "We've seen a 35% reduction in security incidents since deploying BestCity across our facilities. The ROI has far exceeded our expectations.",
      author: "James Wilson",
      position: "Security Director, Nokia Enterprise",
      image: "/images/corporate-campus.jpg"
    }
  ];

  const nextSlide = () => {
    const testimonialCard = document.querySelector('.testimonial-card');
    if (testimonialCard) {
      testimonialCard.classList.add('slide-left');
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
        testimonialCard.classList.remove('slide-left');
      }, 300);
    } else {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    const testimonialCard = document.querySelector('.testimonial-card');
    if (testimonialCard) {
      testimonialCard.classList.add('slide-right');
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
        testimonialCard.classList.remove('slide-right');
      }, 300);
    } else {
      setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    }
  };

  const currentTestimonial = testimonials[currentSlide];

  // Use MUI's useMediaQuery to detect screen width
  const isMobile = useMediaQuery('(max-width:500px)');
  
  // FIXED: Remove "/public" from the path - Next.js automatically serves from public folder
  const videoSource = "/videos/bestCityHomeCover.mp4";

  return (
    <div className="fullscreen-container min-h-screen bg-[#FAFBFF]">
      {/* Hero Section */}
      <div className="min-h-screen grid">
        <div className="relative col-start-1 row-start-1">
          {!videoError ? (
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-screen object-cover"
                onError={(e) => {
                  console.error('Video error:', e);
                  console.error('Video path attempted:', videoSource);
                  setVideoError(true);
                }}
              >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src="/HomeImages/HomeCoverMobile.svg"
                alt="Resourcing services"
                fill
                className="object-cover"
                priority
              />
            )}
        </div>

        <div className="absolute connectHome left-10 right-0 p-8">
          <button
            onClick={() => setIsQueryFormOpen(true)}
            className="connect-button"
          >
            Check Pricing
          </button>
        </div>
      </div>


      {/* Our previous Clients */}
      <div className="bg-white pt-24">
        <div className="container mx-auto mt-8 mb-6">
          <Slider {...settings} className="client-logo-slider">
            {[
              { logo: "/HomeImages/Reliance_Communications_Logo.svg", alt: 'Reliance Communications', className: 'w-24 h-20 object-contain transition-all duration-300' },
              { logo: "/HomeImages/wipro_new_logo.svg", alt: 'Wipro', className: 'w-32 h-20 object-contain transition-all duration-300' },
              { logo: "/HomeImages/Nokia.svg", alt: 'Nokia', className: 'w-32 h-20 object-contain transition-all duration-300' },
              { logo: "/HomeImages/HFCL-Blue-Logo.png", alt: 'HFCL Blue', className: 'w-32 h-20 object-contain transition-all duration-300' },
              { logo: "/HomeImages/Steelman.png", alt: 'Steelman', className: 'w-32 h-20 object-contain transition-all duration-300' },
              { logo: "/HomeImages/Quess.svg", alt: 'Quess', className: 'w-32 h-20 object-contain transition-all duration-300' },
            ].map(({ logo, alt, className }, index) => (
              <div key={index} className="px-10 flex items-center justify-center">
                <Image
                  src={logo}
                  alt={alt}
                  width={120}
                  height={80}
                  className={`${className} opacity-100 hover:opacity-100 filter brightness-0`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="w-full py-20">
        <h2 className='serviceMainTitle mb-7 text-center'>Advanced AI Security for Your Physical Operations</h2>
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`relative serviceCard w-full bg-[#fff]`}
          >
            <div
              className={`max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <div className="flex-1 transform transition-all duration-700 hover:scale-105">
                <div className="overflow-hidden rounded-2xl relative h-[60vh]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex flex-col items-start">
                  <div className="bg-black rounded-2xl p-3 mb-4 text-white">
                    {service.icon}
                  </div>
                  <h2 className="cardtitle font-bold transform transition-all duration-500">
                    {service.title}
                  </h2>
                </div>
                <p className="cardDescription">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Company Description Section */}
      <div className="py-32 px-5 w-full relative overflow-hidden">
        {/* Diagonal gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-black to-white transform scale-150"></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10">
          {/* Centered Title Section */}
          <div className="flex text-center justify-center mb-4">
            <div className="inline-flex items-center gap-2 font-semibold transform transition-all duration-500 hover:scale-105">
              <h2 className="font-medium text-4xl transform transition-all duration-500 text-white">
                See <span className="!bg-gradient-to-r from-[#c78ef9] to-[#8781ef] !bg-clip-text !text-transparent">Best City</span> in Action
              </h2>
            </div>
          </div>

          <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center gap-10">
              <p className="text-xl text-[#ffffffbf] max-w-2xl">
                Discover how businesses with hundreds of cameras use BestCity to enhance security and operations. Experience AI that delivers real business value daily.
              </p>
              <button className="BookDemo-button">
                Book a demo
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="testimonial-layout">
              {/* Image side */}
              <div className="testimonial-image-container">
                <Image
                  src={currentTestimonial.image || "/placeholder.jpg"}
                  alt="Client facility"
                  fill
                  className="testimonial-image"
                  onError={(e) => {
                    e.target.src = "/HomeImages/Client0.png";
                  }}
                />
                <div className="testimonial-company-badge">
                  <span>{currentTestimonial.company}</span>
                </div>
              </div>

              {/* Content side */}
              <div className="testimonial-content">
                <blockquote className="testimonial-quote">
                  "{currentTestimonial.quote}"
                </blockquote>

                <div className="testimonial-footer">
                  <div className="testimonial-author">
                    <p className="testimonial-author-name">{currentTestimonial.author}</p>
                    <p className="testimonial-author-position">{currentTestimonial.position}</p>
                  </div>

                  <button className="testimonial-read-more">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-navigation">
            <button
              onClick={prevSlide}
              className="testimonial-nav-button"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>

            <div className="testimonial-pagination">
              <span className="testimonial-current-slide">{currentSlide + 1}</span>
              <span className="testimonial-divider">/</span>
              <span className="testimonial-total-slides">{totalSlides}</span>
            </div>

            <button
              onClick={nextSlide}
              className="testimonial-nav-button"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;