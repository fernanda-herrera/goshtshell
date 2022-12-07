import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.scss";

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header__content">
        <h1 className="gradient__text">
          Let's build something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="header__content__input">
          <input type="email" placeholder="Email address" />
          <button type="button">Get started</button>
        </div>

        <div className="header__content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="header__image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
