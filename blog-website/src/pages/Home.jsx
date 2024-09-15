import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import PageSection from "../components/PageSection/PageSection";
import { getBlogs } from "../../blogService";

function Home() {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    getBlogs().then((res) => setBlogs(res));
  }, []);
  return (
    <main id="home">
      <Hero />
      <PageSection list={blogs} />
    </main>
  );
}

export default Home;
