import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">Plum</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Pricing</li>
          <li>Docs</li>
          <li>Support</li>
        </ul>
      </nav>
      <div className="auth">
        <button className="sign-in">Sign In</button>
        <button className="get-started">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
