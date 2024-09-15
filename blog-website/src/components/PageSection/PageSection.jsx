import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

function PageSection({ list }) {
  return (
    <section className="page__section">
      <div className="page__section-container">
        <div className="page__section-top">
          <h1>Popular Post</h1>
          <Link to={"/blog"}>
          
          <button>View all</button>
          </Link>
        </div>
        <div className="page__section-bottom">
          {list?.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PageSection;
