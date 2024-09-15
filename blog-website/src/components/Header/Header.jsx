import React from "react";
import { Link } from "react-router-dom";
import siteLogo from "../../assets/images/site-logo.svg";
const Header = () => {
  return (
    <header id="header">
      <div className="header__container">
        <Link to={"/"} className="header__left">
          <img src={siteLogo} alt="Site logo" />
          <h1>Zarrin</h1>
        </Link>
        <div className="header__right">
          <Link to="/blogs" >Blog</Link>
          <Link to="/aboutus">About</Link>
          <a href="#subscription">
          Contact us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
