import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail/Detail";
import NotFound from "../pages/NotFound/NotFound";
import AboutUs from "../pages/AboutUs/AboutUs";
import Blogs from "../pages/Blogs/Blogs";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Detail />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
};

export default Routing;
