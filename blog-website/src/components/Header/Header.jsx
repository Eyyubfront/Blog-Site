import React from "react";
import { Link } from "react-router-dom";
import siteLogo from "../../assets/images/site-logo.svg";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
const Header = () => {
  return (
    <header id="header">
      <div className="header__container">
        <Link to={"/"} className="header__left">
          <img src={siteLogo} alt="Site logo" />
          <h1>Zarrin</h1>
        </Link>
        <div className="header__right">
          <Link to="/blogs">Blog</Link>
          <Link to="/aboutus">About</Link>
          <a href="#subscription">Contact us</a>
          <SignedOut>
            <div className="header__signup">
              <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
