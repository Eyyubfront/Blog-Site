import React from "react";
import Hero from "../components/Hero/Hero";
import PageSection from "../components/PageSection/PageSection";

function Home() {
  const [blogs,setBlogs]= Usestate()
  return (
    <main id="home">
      <Hero />
      <PageSection />
    </main>
  );
}

export default Home;
