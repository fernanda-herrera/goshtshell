import React from 'react'
import Feature from "../../components/feature/Feature";
import "./what.scss"

const What = () => {
  return (
    <div className="whatgpt3 section__margin" id="what-is-gpt3">
      <div className="whatgpt3__features__container">
        <Feature
          title="What is GPT-3?"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="whatgpt3__feature__heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>

      <div className="whatgpt3__features__container__single">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
        />
      </div>
    </div>
  );
};

export default What