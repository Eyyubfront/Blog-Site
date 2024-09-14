import React from "react";
import { Link } from "react-router-dom";
import siteLogo from "../../assets/images/site-logo.svg";
const Header = () => {
  return (
    <header id="header">
      <div className="header__container">
        <div className="header__left">
          <img src={siteLogo} alt="Site logo" />
          <h1>Zarrin</h1>
        </div>
        <div className="header__right">
          <Link>Blog</Link>
          <Link>About</Link>
          <Link>Contact us</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
