import React, { useEffect, useState } from "react";
import { getBlogs } from "../../../blogService";
import { Link } from "react-router-dom";

function Hero() {

  const [blogs,setBlogs] = useState([])
  useEffect(()=>{
getBlogs().then((res)=>setBlogs(res))
  },[])
  return (
    <section id="hero">
      <div className="hero__container">
        <div className="hero__left">
          <h4>{blogs[0]?.category}</h4>
          <h1>{blogs[0]?.title}</h1>
          <p>
          {blogs[0]?.description}
          </p>
          <Link to={"/" + blogs[0]?.id}>
          
          <button>Read more</button>
          </Link>
        </div>
        <div className="hero__right">
          <img
            src={blogs[0]?.image}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
