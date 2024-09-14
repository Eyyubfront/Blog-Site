import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail/Detail";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<<<<<<< HEAD
=======
      <Route path="/detail" element={<Detail />} />
>>>>>>> 87b5755b794b0d254b1d450d7ee02479f2cc6366
    </Routes>
  );
};

export default Routing;
