import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="card">
      <img
        src={item.image}
        alt=""
      />
      <div className="card__content">
        <div className="card__top">
          <p className="card__category">{item.category}</p>
          <p className="card__date">{item.publishedAt}</p>
        </div>
        <div className="card__bottom">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
        <Link to={"/" + item.id}>Read more...</Link>
      </div>
    </div>
  );
}

export default Card;
