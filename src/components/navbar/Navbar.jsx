import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.scss";
import "../../App.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__links">
        <div className="navbar__links__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar__links__container">
          <a href="#home">Home</a>
          <a href="#what-is-gpt3">What is GPT3?</a>
          <a href="#open-ai">OpenAI</a>
          <a href="#case-studies">Case studies</a>
          <a href="#library">Library</a>
        </div>
      </div>

      <div className="navbar__sign">
        <a>Sign in</a>
        <button type="button">Sign up</button>
      </div>

      <div className="navbar__menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar__menu-container scale-up-center">
            <div className="navbar__menu-container__links">
              <a href="#home">Home</a>
              <a href="#what-is-gpt3">What is GPT3?</a>
              <a href="#open-ai">OpenAI</a>
              <a href="#case-studies">Case studies</a>
              <a href="#library">Library</a>
              <div className="navbar__menu-container__links__sign">
                <a>Sign in</a>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
