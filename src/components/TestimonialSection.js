import React from "react";
import "./TestimonialSection.css";

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <div className="companies-insured">
        <h3>3700+ companies insured</h3>
        <div className="logos">
          {/* Use images here for each logo */}
        </div>
      </div>
      <div className="testimonial">
        <p>
          "Very excited to be giving a major boost to the healthcare and
          insurance benefits we provide to our team at @entechventures. Miles to
          go but it's a step in the right direction."
        </p>
        <p>Umesh Bhutoria, Founder, XemplaHQ</p>
      </div>
    </div>
  );
};

export default TestimonialSection;
