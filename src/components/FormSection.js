import React from "react";
import "./FormSection.css";

const FormSection = () => {
  return (
    <div className="form-section">
      <h2>Get a quick quote from Plum</h2>
      <form>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your work email" />
        <input type="text" placeholder="Your company name" />
        <input type="tel" placeholder="Your phone number" />
        <input type="number" placeholder="Number of employees" />
        <select>
          <option>Buying insurance for the first time</option>
        </select>
        <button type="submit">Get a quote</button>
      </form>
    </div>
  );
};

export default FormSection;
