import React from "react";

const Feature = ({ title, text }) => {
  return (
    <div className="whatgpt3__feature">
      <div className="whatgpt3__feature__content">
        <div className="gradient-border " />
        <h1>{title}</h1>
      </div>

      <div className="whatgpt3__feature__content">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
