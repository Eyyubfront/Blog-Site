import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="card">
      <img
        src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
        alt=""
      />
      <div className="card__content">
        <div className="card__top">
          <p className="card__category">Travel</p>
          <p className="card__date">13 March 2023</p>
        </div>
        <div className="card__bottom">
          <h1>Train Or Bus Journey? Which one suits?</h1>
          <p>
            The choice between a train or bus journey depends on various factors
            such as the distance of the journey, the time available, the cost,
            and person
          </p>
        </div>
        <Link>Read more...</Link>
      </div>
    </div>
  );
}

export default Card;
