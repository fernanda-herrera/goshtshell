import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.scss";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Message or am nothing",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Really boy law county",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
];

const Features = () => {
  return (
    <div className="features section__padding" id="open-ai">
      <div className="features__heading">
        <h1 className="gradient__text">
          The future is now. Step into the future today and make it happen.
        </h1>
        <p>Request early access to get started</p>
      </div>

      <div className="features__container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
