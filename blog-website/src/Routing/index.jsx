import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail/Detail";
import NotFound from "../pages/NotFound/NotFound";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
