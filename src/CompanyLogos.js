import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CompanyLogos = () => {
  const logos = [
    'https://logos-world.net/wp-content/uploads/2020/09/BackRub-Logo-1995-1997-700x394.png',
    'https://logos-world.net/wp-content/uploads/2020/12/Fiverr-Logo-500x281.png',
    'https://logos-world.net/wp-content/uploads/2020/04/TikTok-Logo-700x394.png',
    'https://logos-world.net/wp-content/uploads/2020/12/FoodieBay-Logo-2008-700x394.png',
    'https://logos-world.net/wp-content/uploads/2020/05/Facebook-Logo-500x281.png',
    'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo-700x394.png',
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="company-logos-section">
      <h2>3700+ companies insured</h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index}>
            <img src={logo} alt={`Company Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <p>...covering 5,00,000+ lives</p>
    </div>
  );
};

export default CompanyLogos;

