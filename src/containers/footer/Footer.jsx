import React from "react";
import logo from "../../assets/logo.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer__heading">
        <h1 className="gradient__text">Step into the future before others</h1>
      </div>

      <div className="footer__button">
        <button type="submit">Request early access</button>
      </div>

      <div className="footer__links">
        <div className="footer__links__logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="footer__links__div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="footer__links__div">
          <h4>Company</h4>
          <p>Terms & conditions</p>
          <p>Privacy policy</p>
          <p>Contact</p>
        </div>

        <div className="footer__links__div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p>© {new Date().getFullYear()} GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
