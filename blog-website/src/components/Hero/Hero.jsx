import React from "react";

function Hero() {
  return (
    <section id="hero">
      <div className="hero__container">
        <div className="hero__left">
          <h4>Featured Post</h4>
          <h1>How AI will Change the Future</h1>
          <p>
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly
            cute. For example, home robots will overcome navigation, direction
          </p>
          <button>Read more</button>
        </div>
        <div className="hero__right">
          <img
            src="https://robbreport.com/wp-content/uploads/2022/11/11-w-Utopia_1.jpg?w=681&h=383&crop=1"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
