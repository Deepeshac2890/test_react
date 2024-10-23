import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import CompanyLogos from './CompanyLogos';  // Import the component

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  // Enable autoplay for testimonials
    autoplaySpeed: 3000,
    nextArrow: <FiArrowRight />,
    prevArrow: <FiArrowLeft />,
  };

  return (
    <div className="container">
      {/* Header */}
      <header style={{ position: 'absolute', left: '0', top: '0', width: '100%', backgroundColor: '#f5f5f5', color: '#3B1E54', padding: '10px 20px', textAlign: 'left' }}>
        <h1 style={{ margin: '0' }}>plumHQ</h1>
      </header>
      
      {/* Left Section - Form */}
      <div className="left-section" style={{ marginTop: '60px' }}>
        <h1>Get a quick quote from Plum</h1>
        <form>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your work email" />
          <input type="text" placeholder="Your company name" />
          <input type="tel" placeholder="Your phone number" />
          <input type="number" placeholder="Number of employees" />
          <select>
            <option>Buying insurance for the first time</option>
          </select>
          <button type="button" style={{ backgroundColor: 'green', color: 'white' }}>Get a quote</button>
        </form>
      </div>

      {/* Right Section - Company Logos */}
      <div className="right-section">
        <CompanyLogos />  {/* Keep this section at the top */}

        {/* Testimonials Section */}
        <div className="testimonials-section">
          <h2>What people are saying</h2>
          <Slider {...settings}>
            <div className="testimonial">
              <p>
                "Very excited to be giving a major boost to the healthcare and insurance benefits
                we provide to our team at @entechventures. Thanks, @getplumhq for making it easy."
              </p>
              <span>Umesh Bhutoria, Founder of XemplaHQ</span>
            </div>
            <div className="testimonial">
              <p>
                "The entire process happened unexpectedly quickly. Thank you for your quick responses."
              </p>
              <span>Bandita, Cashless Claims Expert</span>
            </div>
            <div className="testimonial">
  <p>
    "Switching to Plum has been a game-changer for our company. The ease of use and exceptional customer service
     have surpassed our expectations."
  </p>
  <span>Ravi Sharma, HR Manager at TechWave</span>
</div>

            {/* Add more testimonials */}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default App;
