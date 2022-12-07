import React from "react";
import "./article.scss";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="blog__container__article">
      <div className="blog__container__article__image">
        <img src={imgUrl} alt="blog" />
      </div>

      <div className="blog__container__article__content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>
          <a>Read full article</a>
        </p>
      </div>
    </div>
  );
};

export default Article;
